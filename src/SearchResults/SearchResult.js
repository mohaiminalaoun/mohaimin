import React from 'react';
import './SearchResult.css';

class SearchResult extends React.Component{
  render() {
    let resultString = (this.props.content === 'Resume' || this.props.content === 'resume') ?
      "Here's Mohaimin's resume" : "Sorry your search returned no results."
      return (
        <div className="result-container">
          <div className="result-text">{resultString}</div>
        </div>
      );
  }
}

export default SearchResult;
