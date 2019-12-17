import React from "react";
import "./SuggestionsList.css";

const SuggestionsList = ({
  shouldShowSuggestion,
  listItems,
  searchHistory
}) => {
  return shouldShowSuggestion ? (
    <div className="suggestionsList" id="suggestionList">
      {listItems}
      {searchHistory}
    </div>
  ) : null;
};

export default SuggestionsList;
