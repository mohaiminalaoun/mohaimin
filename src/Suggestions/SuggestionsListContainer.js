import React from "react";
import "./SuggestionsList.css";
import SuggestionsData from "../data/suggestionsData";
import SuggestionsList from "./SuggestionsList";

/*
Function to get suggestion list dropdown items div
*/
function getListItems() {
  const {inputValue, selectedSugIndex} = this.props;
  const query = inputValue && inputValue.toLowerCase();
  let suggestionItemsData = SuggestionsData.suggestionItemsData;
  let matchingSuggestions = suggestionItemsData.filter(item => {
    let {href, text, tags} = item;
    return (
      href.toLowerCase().indexOf(query) !== -1 ||
      text.toLowerCase().indexOf(query) !== -1 ||
      tags.toLowerCase().indexOf(query) !== -1
    );
  });
  let numMatches = matchingSuggestions.length;
  let curSelIdx =
    selectedSugIndex === -1
      ? -1
      : Math.abs(selectedSugIndex) % numMatches;
  let count = 0;
  let listItems = matchingSuggestions.map(item => {
    let {text, href} = item,
        {doAction, hoverOnItem} = this;
    count++;
    return (
      <ul
        onMouseDown={doAction}
        id={count - 1 + "sugItem"}
        key={text}
        onMouseOver={hoverOnItem}
        className={"suggestionItem " + (curSelIdx === count - 1 ? "hover" : "")}
      >
        <a href={href}> {text} </a>
      </ul>
    );
  });
  return listItems;
}

// function to convert LRU cache to array
function getCachedSearchHistory(LRU) {
  let dummyHead = LRU && LRU.dummyHead,
    arr = [],
    cur = dummyHead;
  while (cur !== null) {
    arr.push(cur.val);
    cur = cur.next;
  }
  arr.pop();
  arr.shift();
  return arr;
}

class SuggestionsListContainer extends React.Component {
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

  doAction = evt => {
    let str = evt.currentTarget.innerHTML,
      searchQuery = str.split(">")[1].split("<")[0];
    this.props.searchTriggerFn(searchQuery);
  };
  hoverOnItem = evt => {
    this.props.showSuggestionFn(
      this.props.inputValue,
      parseInt(evt.currentTarget.id, 10)
    );
  };

  render() {
    const { LRUCache, shouldShowSuggestion } = this.props;
    let cachedSearchHistory = getCachedSearchHistory(LRUCache);
    let searchHistory = cachedSearchHistory.map(item => (
        <ul
          id={item}
          key={Math.floor(1000 + Math.random() * 9000) + item}
          className="suggestionItem history"
        >
          {item}
        </ul>
      )),
      listItems = getListItems.call(this);
    return (
      <SuggestionsList
        searchHistory={searchHistory}
        listItems={listItems}
        shouldShowSuggestion={shouldShowSuggestion}
      ></SuggestionsList>
    );
  }
}

export default SuggestionsListContainer;
