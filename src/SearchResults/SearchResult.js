import React from 'react';
import './SearchResult.css';

const SearchResult =  (props) => {


      return (
        <div className="result-container">
          <div className="result-text">{props.text}</div>
          <div className="result-desc"><a href={props.href}>{props.href}</a></div>
        </div>
      );

}

export default SearchResult;
