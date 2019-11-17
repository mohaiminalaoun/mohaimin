import React from 'react';
import './SuggestionsList.css';
import SuggestionsData from './data/suggestionsData';


class SuggestionsList extends React.Component{

  constructor(props) {
    super(props);
  }

  changeFn(evt) {
    var input = document.getElementById("suggestionListInput");
    if (input) {
      input.blur()
    }
  }


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
    const query = this.props.inputValue && this.props.inputValue.toLowerCase();
    let suggestionItemsData = SuggestionsData.suggestionItemsData;
    let matchingSuggestions = suggestionItemsData.filter(item => {
      let href = item.href,
          text = item.text,
          tags = item.tags;
      return href.toLowerCase().indexOf(query)!==-1 || text.toLowerCase().indexOf(query)!== -1 || tags.toLowerCase().indexOf(query)!== -1;
    });
    let numMatches = matchingSuggestions.length;
    let curSelIdx = (Math.abs(this.props.selectedSugIndex) % numMatches);
    let count = 0;
    let listItems = matchingSuggestions.map(item => {
      count++;
      return <ul onMouseDown={this.doAction} id={(count-1)+"sugItem"}key={item.text} onMouseOver={this.hoverOnItem}
                  className={"suggestionItem "+(curSelIdx === count-1 ? "hover" : '')}>
                <a href={item.href}> {item.text} </a>
              </ul>
    });
    let listDiv = (<div className="suggestionsList" id="suggestionList">
                      {listItems}
                    </div>);
      return this.props.shouldShowSuggestion ? listDiv : null;
  }
}

export default SuggestionsList;
