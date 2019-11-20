import React from 'react';
import './SearchBox.css';

class SearchBox extends React.Component{
  onFocus = () => {
    // TODO: add style changess
  }
  onKeyUp = (evt) => {
    const val = evt.target.value
    if (evt.key === 'Enter') {
      // call the search function defined in App component
      this.props.searchTriggerFn(val, this.props.finalSearchQuery, true);
    } else if (evt.key === 'ArrowDown') {
      this.props.showSuggestionFn(val, this.props.selectedSugIndex+1);
    } else if (evt.key === 'ArrowUp') {
      this.props.showSuggestionFn(val, this.props.selectedSugIndex-1);
    } else {
      this.props.showSuggestionFn(val);
    }
  }
  onBlur = (evt) => {
    this.props.hideSuggestionFn();
  }
  render() {
      let tempClass = "searchbox "+ (this.props.shouldShowSuggestion ? "searching" : "");
      return (
        <div className="search-container">
          <input
          id="searchbox"
          value={this.input}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyUp={this.onKeyUp}
          autoComplete="off"
          className= {tempClass}></input>
        </div>
      );
  }
}


export default SearchBox;
