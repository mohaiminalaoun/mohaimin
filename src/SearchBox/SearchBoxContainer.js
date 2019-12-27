import React from "react";
import SearchBox from "./SearchBox";
import "./SearchBox.css";
import { connect } from "react-redux";

class SearchBoxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearch: null
    };
  }
  onFocus = () => {
    // TODO: add style changess
  };
  onKeyUp = evt => {
    const val = evt.target.value,
      {
        searchTriggerFn,
        showSuggestionFn,
        finalSearchQuery,
        selectedSugIndex
      } = this.props;
    if (evt.key === "Enter") {
      // call the search function defined in App component
      evt.target.blur();
      searchTriggerFn(val, finalSearchQuery, true);
    } else if (evt.key === "ArrowDown") {
      showSuggestionFn(val, selectedSugIndex + 1);
    } else if (evt.key === "ArrowUp") {
      showSuggestionFn(val, selectedSugIndex - 1);
    } else {
      showSuggestionFn(val);
    }
  };
  onBlur = evt => {
    this.props.hideSuggestionFn();
  };
  render() {
    let tempClass =
      "searchbox " + (this.props.shouldShowSuggestion ? "searching" : "");
    return (
      <SearchBox
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onKeyUp={this.onKeyUp}
        tempClass={tempClass}
      ></SearchBox>
    );
  }
}

const mapStateToProps = state => ({
  currentSearch: state.currentSearch
});

export default connect(mapStateToProps)(SearchBoxContainer); // export connected component
