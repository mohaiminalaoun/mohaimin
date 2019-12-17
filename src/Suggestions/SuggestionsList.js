import React from "react";
import "./SuggestionsList.css";

const SuggestionsList = props => {
  return props.shouldShowSuggestion ? (
    <div className="suggestionsList" id="suggestionList">
      {props.listItems}
      {props.searchHistory}
    </div>
  ) : null;
};

export default SuggestionsList;
