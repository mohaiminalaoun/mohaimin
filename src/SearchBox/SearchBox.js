import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
  return <div className="search-container">
          <input
              id="searchbox"
              value={props.input}
              onFocus={props.onFocus}
              onBlur={props.onBlur}
              onKeyUp={props.onKeyUp}
              autoComplete="off"
              className= {props.tempClass}>
          </input>
        </div>
}

export default SearchBox;
