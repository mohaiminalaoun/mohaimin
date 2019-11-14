import React from 'react';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import SuggestionsList from './SuggestionsList';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import half from './half.svg';
import './App.css';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      finalSearchQuery: null,
      shouldShowSuggestion: false,
      startingText: ''
    }
  }


  triggerSearch = (txt) => {
    this.setState({finalSearchQuery: txt});
  }
  showSuggestionFn = (startingText) => {
    this.setState({
      shouldShowSuggestion: true,
      startingText: startingText
    });
  }

  hideSuggestionFn = (startingText) => {
    this.setState({
      shouldShowSuggestion: false,
      startingText: startingText
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
    logoCont.style.left = (clientWidth/2 - (0.125*Math.min(clientWidth,clientHeight))) + "px";
  }

  render = () => {
    const imageDiv =  <div id="logo-container" className="logo-container">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo shadow" alt="logo" />
      </div>;
    //  <img src={half} id = "half-logo" className="App-logo shadow half" alt="logo" />

    return (

        <div className="background">

              <SearchBox searchTriggerFn={this.triggerSearch}
                         showSuggestionFn={this.showSuggestionFn}
                         hideSuggestionFn={this.hideSuggestionFn}
                         shouldShowSuggestion={this.state.shouldShowSuggestion}>
              </SearchBox>
              <SuggestionsList
                         shouldShowSuggestion={this.state.shouldShowSuggestion}
                         inputValue={this.state.startingText}>
              </SuggestionsList>
              {imageDiv}
              {/*{this.state.finalSearchQuery ? <SearchResult content={this.state.finalSearchQuery}> </SearchResult> : null}*/}
        </div>

      );
    }
}

const mapStateToProps = state => ({
  count: state.count
})

export default connect()(App); // export connected component
