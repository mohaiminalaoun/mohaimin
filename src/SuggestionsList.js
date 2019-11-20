import React from 'react';
import './SuggestionsList.css';
import SuggestionsData from './data/suggestionsData';

/*
Function to get suggestion list dropdown items div
*/
function getListItems() {
  let props = this.props,
      inputValue = props.inputValue;
  const query = inputValue && inputValue.toLowerCase();
  let suggestionItemsData = SuggestionsData.suggestionItemsData;
  let matchingSuggestions = suggestionItemsData.filter(item => {
    let href = item.href,
        text = item.text,
        tags = item.tags;
    return href.toLowerCase().indexOf(query)!==-1 || text.toLowerCase().indexOf(query)!== -1 || tags.toLowerCase().indexOf(query)!== -1;
  });
  let numMatches = matchingSuggestions.length;
  let curSelIdx = (Math.abs(props.selectedSugIndex) % numMatches);
  let count = 0;
  let listItems = matchingSuggestions.map(item => {
    count++;
    return <ul onMouseDown={this.doAction} id={(count-1)+"sugItem"}key={item.text} onMouseOver={this.hoverOnItem}
                className={"suggestionItem "+(curSelIdx === count-1 ? "hover" : '')}>
              <a href={item.href}> {item.text} </a>
            </ul>
  });
  return listItems;
}


class SuggestionsList extends React.Component{

  changeFn(evt) {
    var input = document.getElementById("suggestionListInput");
    if (input) {
      input.blur();
    }
  }
/*Function to change the position of the suggestionList when the dimension of the document changes*/
  componentDidUpdate() {
    const input = document.getElementById("searchbox"),
          sugList = document.getElementById("suggestionList");
    if (input && sugList) {
      sugList.style.left = input.offsetLeft + "px";
      sugList.style.top = input.offsetTop + input.offsetHeight + "px";
      sugList.style.width = input.offsetWidth + "px";
    }
  }

  doAction(evt) {
    let str = evt.currentTarget.innerHTML,
        url = str.split('href="')[1].split('">')[0];
        window.open(url, "_blank");
  }
  hoverOnItem = (evt) => {
    this.props.showSuggestionFn(this.props.inputValue, parseInt(evt.currentTarget.id, 10));
  }

  render() {
    let searchHistory = this.props.searchHistory.map( (item) =>
              <ul id={item} key={(Math.floor(1000 + Math.random() * 9000))+(item)}className="suggestionItem history">{item}</ul>),
        listItems = getListItems.call(this),
        listDiv = (<div className="suggestionsList" id="suggestionList">
                      {listItems}
                      {searchHistory}
                    </div>);
      return this.props.shouldShowSuggestion ? listDiv : null;
  }
}

export default SuggestionsList;
