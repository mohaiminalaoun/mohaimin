import React, { useState, useEffect } from "react";
import "./SearchBox.css";
import { suggestionItemsData } from "../data/suggestionsData";

const SearchBox = props => {
  const [count, setCount] = useState(0);
  // React hook that is the equivalent of componentDidMount, componentDidUpdate, and componentWillUnmount
  useEffect(() => {
    //console.log("useEffect in searchbox is called");
    //setCount(count+1); // don't do this
  });
  let placeholderText =
      suggestionItemsData[
        Math.floor(Math.random() * suggestionItemsData.length)
      ].text;
  return (
    <div className="search-container">
      <div className="question-text">{"Find answers to "} <span className="question-highlight">questions </span> {"such as"}</div>
      <input
        id="searchbox"
        value={props.input}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onKeyUp={props.onKeyUp}
        placeholder={placeholderText}
        autoComplete="off"
        className={props.tempClass}
      ></input>
    </div>
  );
};

export default SearchBox;
