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

  render() {
    const query = this.props.inputValue && this.props.inputValue.toLowerCase();
    let suggestionItemsData = SuggestionsData.suggestionItemsData;
    let matchingSuggestions = suggestionItemsData.filter(item => {
      let href = item.href,
          text = item.text,
          tags = item.tags;
      return href.toLowerCase().indexOf(query)!==-1 || text.toLowerCase().indexOf(query)!== -1 || tags.toLowerCase().indexOf(query)!== -1;
    });
    let listItems = matchingSuggestions.map(item => {
      return <ul onMouseDown={this.doAction} key={item.text}className="suggestionItem"> <a href={item.href}> {item.text} </a></ul>
    });
    let listDiv = (<div className="suggestionsList" id="suggestionList">
                      {listItems}
                    </div>);
      return this.props.shouldShowSuggestion ? listDiv : null;
  }
}

export default SuggestionsList;
