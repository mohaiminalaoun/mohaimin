import React from 'react';
import './SearchBox.css';

class SearchBox extends React.Component{
  constructor(props) {
    super(props);
  }
  onFocus = () => {
    // TODO: add style changess
  }
  onKeyUp = (evt) => {
    this.props.showSuggestionFn(evt.target.value);
    if (evt.key === 'Enter') {
      // call the search function defined in App component
      this.props.searchTriggerFn(evt.target.value);
    }
  }
  onBlur = (evt) => {
    this.props.hideSuggestionFn();
  }
  render() {
      return (
        <div className="search-container">
          <input
          id="searchbox"
          value={this.input}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyUp={this.onKeyUp}
          autoComplete="off"
          className="searchbox"></input>
        </div>
      );
  }
}

export default SearchBox;
