import React, { useState, useEffect } from "react";
import "./SearchBox.css";
import icon from "./assets/searchicon.svg";
import { suggestionItemsData } from "../data/suggestionsData";

const SearchBox = props => {
  const [count, setCount] = useState(0);
  // React hook that is the equivalent of componentDidMount, componentDidUpdate, and componentWillUnmount
  useEffect(() => {
    //console.log("useEffect in searchbox is called");
    //setCount(count+1); // don't do this
  });
  let placeholderText = "Search";
  // suggestionItemsData[Math.floor(Math.random() * suggestionItemsData.length)]
  //   .text;
  const imgStyle = {
    height: "20px",
    width: "20px",
    position: "absolute",
    marginTop: "13px",
    marginLeft: "4px"
  };
  return (
    <div className="search-container">
      <img src={icon} style={imgStyle} />
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
