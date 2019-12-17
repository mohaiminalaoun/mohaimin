import React, { useState, useEffect } from "react";
import "./SearchBox.css";

const SearchBox = props => {
  const [count, setCount] = useState(0);
  // React hook that is the equivalent of componentDidMount, componentDidUpdate, and componentWillUnmount
  useEffect(() => {
    //console.log("useEffect in searchbox is called");
    //setCount(count+1); // don't do this
  });
  return (
    <div className="search-container">
      <input
        id="searchbox"
        value={props.input}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onKeyUp={props.onKeyUp}
        autoComplete="off"
        className={props.tempClass}
      ></input>
    </div>
  );
};

export default SearchBox;
