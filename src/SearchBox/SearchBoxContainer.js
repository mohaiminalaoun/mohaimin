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
    const val = evt.target.value;
    if (evt.key === "Enter") {
      // call the search function defined in App component
      this.props.searchTriggerFn(val, this.props.finalSearchQuery, true);
    } else if (evt.key === "ArrowDown") {
      this.props.showSuggestionFn(val, this.props.selectedSugIndex + 1);
    } else if (evt.key === "ArrowUp") {
      this.props.showSuggestionFn(val, this.props.selectedSugIndex - 1);
    } else {
      this.props.showSuggestionFn(val);
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
