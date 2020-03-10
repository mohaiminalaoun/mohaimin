import React from "react";
// import SearchResult from './SearchResult';
import SuggestionsListContainer from "../Suggestions/SuggestionsListContainer";
import SearchBoxContainer from "../SearchBox/SearchBoxContainer";
import SearchResultsContainer from "../SearchResults/SearchResultsContainer";
import NamePlateContainer from "../NamePlate/NamePlateContainer";
import HighlightsContainer from "../Highlights/HighlightsContainer";
import ExperienceContainer from "../Experience/ExperienceContainer";
import { connect } from "react-redux";
import logo from "./assets/logo.svg";
import face from "./assets/manwithpc2.svg";
import moon from "./assets/Moon.svg";
import faceLight from "./assets/manwithpc2.svg"; // TODO: change this logo
//import half from './half.svg';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: false,
      loadingDone: false
    };
    /*After this time, the main app would show*/
    setTimeout(() => {
      this.setState({
        loadingDone: true
      });
      this.updateDimensions();
    }, 50);
  }

  triggerSearch = (txt, finalSearchQuery, isEnterPressed) => {
    // temporary function to find items with class hover
    const classList = document.getElementsByClassName("hover"),
      selText = classList && classList[0] && classList[0].innerText,
      { dispatchaddSearchQuery, dispatchCurrentSearch } = this.props;
    if (selText) {
      // means a hovered suggested item was clicked
      dispatchaddSearchQuery(selText);
      if (classList[0] && classList[0].children) {
        //window.open(classList[0].children[0].href, "_blank");
      }
      dispatchCurrentSearch(selText);
    } else if (isEnterPressed) {
      // means a hovered search item was not clicked, so search for the actial text input
      dispatchaddSearchQuery(txt);
      dispatchCurrentSearch(txt);
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
    const {
        finalSearchQuery,
        shouldShowSuggestion,
        selectedSugIndex,
        startingText,
        searchHistory,
        LRUCache,
        currentSearch
      } = this.props,
      loadingScreen = (
        <div className="background loading-screen">
          <h4 className="welcome-text">Welcome to my website</h4>
          <img src={moon} className="moon-image" />
        </div>
      ),
      mainApp = (
        <div className="mainApp">
          <div className="background">
            <SearchBoxContainer
              searchTriggerFn={this.triggerSearch}
              finalSearchQuery={finalSearchQuery}
              showSuggestionFn={this.showSuggestionFn}
              hideSuggestionFn={this.hideSuggestionFn}
              shouldShowSuggestion={shouldShowSuggestion}
              selectedSugIndex={selectedSugIndex}
            ></SearchBoxContainer>
            <SuggestionsListContainer
              shouldShowSuggestion={shouldShowSuggestion}
              searchTriggerFn={this.triggerSearch}
              inputValue={startingText}
              showSuggestionFn={this.showSuggestionFn}
              searchHistory={searchHistory}
              LRUCache={LRUCache}
              selectedSugIndex={selectedSugIndex}
            ></SuggestionsListContainer>
            <SearchResultsContainer
              shouldShowSuggestion={shouldShowSuggestion}
              searchHistory={searchHistory}
              currentSearch={currentSearch}
            ></SearchResultsContainer>
          </div>
          <NamePlateContainer />
          <HighlightsContainer />
          <ExperienceContainer />
        </div>
      );
    return <div>{this.state.loadingDone ? mainApp : loadingScreen}</div>;
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App); // export connected component
