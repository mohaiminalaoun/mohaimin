import React from 'react';
import SearchBox from './SearchBox';
// import SearchResult from './SearchResult';
import SuggestionsList from './SuggestionsList';
import { connect } from 'react-redux';
import logo from './logo.svg';
import face from './face.svg'
//import half from './half.svg';
import './App.css';

class App extends React.Component{

  triggerSearch = (txt, finalSearchQuery, isEnterPressed) => {
    // temporary function to find items with class hover
    const classList = document.getElementsByClassName('hover'),
          selText = classList && classList[0] && classList[0].innerText;
    if (selText) {
      this.props.dispatch( {
        type: 'addSearchQuery',
        payload: {
            finalSearchQuery: selText
          }
      });
      if (classList[0] && classList[0].children) {
        window.open(classList[0].children[0].href, "_blank");
      }
    } else if (isEnterPressed) {
      this.props.dispatch( {
        type: 'addSearchQuery',
        payload: {
            finalSearchQuery: txt
          }
      });
    }
  }
  showSuggestionFn = (startingText, idx = 0) => {
    this.props.dispatch( {
      type: 'showSuggestionFn',
      payload: {
          shouldShowSuggestion: true,
          startingText: startingText,
          selectedSugIndex: idx
        }
    });
  }

  hideSuggestionFn = (startingText) => {
    this.props.dispatch( {
      type: 'hideSuggestionFn',
      payload: {
          shouldShowSuggestion: false
        }
    });
  }

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
          inputDiv = document.getElementById("searchbox"),
          halfLogo = document.getElementById("half-logo"),
          inputLeft = inputDiv.offsetLeft,
          inputWidth = inputDiv.offsetWidth,
          clientWidth = document.documentElement.clientWidth,
          clientHeight = document.documentElement.clientHeight,
          selfWidth = 0.125 * clientWidth,
          paddingPx = 0.1 * clientHeight,
          hLWidth = 0.05 * clientWidth;
    if (logoCont) {
      logoCont.style.left = (clientWidth/2 - (0.125*Math.min(clientWidth,clientHeight))) + "px";
    }
  }

  render = () => {
    const imageDiv = <div>
      <div id="logo-container" className="logo-container">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo shadow" alt="logo" />
      </div>
        <div>
          <img src={face} className="face-avatar" alt="logo" />
        </div>
      </div>
    //  <img src={half} id = "half-logo" className="App-logo shadow half" alt="logo" />

    return (

        <div className="background">

              <SearchBox searchTriggerFn={this.triggerSearch}
                         finalSearchQuery={this.props.finalSearchQuery}
                         showSuggestionFn={this.showSuggestionFn}
                         hideSuggestionFn={this.hideSuggestionFn}
                         shouldShowSuggestion={this.props.shouldShowSuggestion}
                         selectedSugIndex={this.props.selectedSugIndex}>
              </SearchBox>
              <SuggestionsList
                         shouldShowSuggestion={this.props.shouldShowSuggestion}
                         inputValue={this.props.startingText}
                         showSuggestionFn={this.showSuggestionFn}
                         searchHistory={this.props.searchHistory}
                         selectedSugIndex={this.props.selectedSugIndex}>
              </SuggestionsList>
             {imageDiv}
              {/*{this.state.finalSearchQuery ? <SearchResult content={this.state.finalSearchQuery}> </SearchResult> : null}*/}
        </div>

      );
    }
}

const mapStateToProps = state => ({
    finalSearchQuery: state.finalSearchQuery,
    shouldShowSuggestion: state.shouldShowSuggestion,
    startingText: state.startingText,
    selectedSugIndex: state.selectedSugIndex,
    searchHistory: state.searchHistory
  });



export default connect(mapStateToProps)(App); // export connected component
