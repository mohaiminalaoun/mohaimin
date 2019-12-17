import React from "react";
// import SearchResult from './SearchResult';
import SuggestionsListContainer from "../Suggestions/SuggestionsListContainer";
import SearchBoxContainer from "../SearchBox/SearchBoxContainer";
import SearchResultsContainer from "../SearchResults/SearchResultsContainer";
import { connect } from "react-redux";
import logo from "./logo.svg";
import face from "./manwithpc2.svg";
import faceLight from "./manwithpc2.svg"; // TODO: change this logo
//import half from './half.svg';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: false
    };
  }

  triggerSearch = (txt, finalSearchQuery, isEnterPressed) => {
    // temporary function to find items with class hover
    const classList = document.getElementsByClassName("hover"),
      selText = classList && classList[0] && classList[0].innerText;
    if (selText) {
      // means a hovered suggested item was clicked
      this.props.dispatchaddSearchQuery(selText);
      if (classList[0] && classList[0].children) {
        //window.open(classList[0].children[0].href, "_blank");
      }
      this.props.dispatchCurrentSearch(selText);
    } else if (isEnterPressed) {
      // means a hovered search item was not clicked, so search for the actial text input
      this.props.dispatchaddSearchQuery(txt);
      this.props.dispatchCurrentSearch(txt);
    }
  };
  // -1 to indicate that no suggestion item should be highlighted
  showSuggestionFn = (startingText, idx = -1) => {
    const Prom = new Promise((resolve, reject) => {
      this.setState({
        typing: true
      });
      resolve();
      reject();
    });

    Prom.then(
      param => {
        if (this.state.typing) {
          setTimeout(() => {
            this.setState({
              typing: false
            });
          }, 200);
        }
      },
      param => {}
    ).then(param => {
      this.props.dispatchShowSuggestion(startingText, idx);
    });
  };

  hideSuggestionFn = startingText => {
    this.props.dispatchHideSuggestion();
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    const logoCont = document.getElementById("logo-container"),
      clientWidth = document.documentElement.clientWidth,
      clientHeight = document.documentElement.clientHeight;
    if (logoCont) {
      logoCont.style.left =
        clientWidth / 2 - 0.125 * Math.min(clientWidth, clientHeight) + "px";
    }
  };

  render = () => {
    const imageDiv = (
      <div>
        <div id="logo-container" className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo shadow" alt="logo" />
        </div>
        <div>
          <img
            src={this.state.typing ? faceLight : face}
            className="face-avatar"
            alt="logo"
          />
        </div>
      </div>
    );
    //  <img src={half} id = "half-logo" className="App-logo shadow half" alt="logo" />
    return (
      <div className="background">
        <SearchBoxContainer
          searchTriggerFn={this.triggerSearch}
          finalSearchQuery={this.props.finalSearchQuery}
          showSuggestionFn={this.showSuggestionFn}
          hideSuggestionFn={this.hideSuggestionFn}
          shouldShowSuggestion={this.props.shouldShowSuggestion}
          selectedSugIndex={this.props.selectedSugIndex}
        ></SearchBoxContainer>
        <SuggestionsListContainer
          shouldShowSuggestion={this.props.shouldShowSuggestion}
          searchTriggerFn={this.triggerSearch}
          inputValue={this.props.startingText}
          showSuggestionFn={this.showSuggestionFn}
          searchHistory={this.props.searchHistory}
          LRUCache={this.props.LRUCache}
          selectedSugIndex={this.props.selectedSugIndex}
        ></SuggestionsListContainer>
        <SearchResultsContainer
          shouldShowSuggestion={this.props.shouldShowSuggestion}
          searchHistory={this.props.searchHistory}
          currentSearch={this.props.currentSearch}
        ></SearchResultsContainer>
        {imageDiv}
      </div>
    );
  };
}

const mapStateToProps = state => ({
  finalSearchQuery: state.finalSearchQuery,
  shouldShowSuggestion: state.shouldShowSuggestion,
  startingText: state.startingText,
  selectedSugIndex: state.selectedSugIndex,
  searchHistory: state.searchHistory,
  LRUCache: state.LRUCache,
  currentSearch: state.currentSearch
});

const mapDispatchToProps = dispatch => ({
  dispatchaddSearchQuery: txt => {
    dispatch({
      type: "addSearchQuery",
      payload: {
        finalSearchQuery: txt
      }
    });
  },
  dispatchShowSuggestion: (startingText, idx) => {
    dispatch({
      type: "showSuggestionFn",
      payload: {
        shouldShowSuggestion: true,
        startingText: startingText,
        selectedSugIndex: idx
      }
    });
  },
  dispatchHideSuggestion: () => {
    dispatch({
      type: "hideSuggestionFn",
      payload: {
        shouldShowSuggestion: false
      }
    });
  },
  dispatchCurrentSearch: txt => {
    dispatch({
      type: "updateCurrentSearch",
      payload: txt
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App); // export connected component
