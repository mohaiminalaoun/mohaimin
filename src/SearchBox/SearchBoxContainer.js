import React from 'react';
import SearchBox from './SearchBox';
import './SearchBox.css';

class SearchBoxContainer extends React.Component{
  onFocus = () => {
    // TODO: add style changess
  }
  onKeyUp = (evt) => {
    console.log("on key up called");
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
      return <SearchBox onFocus={this.onFocus} onBlur={this.onBlur} onKeyUp={this.onKeyUp} tempClass={tempClass} ></SearchBox>;
  }
}


export default SearchBoxContainer;
