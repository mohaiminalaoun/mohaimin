import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';


const initialState = {
    finalSearchQuery: null,
    shouldShowSuggestion: false,
    startingText: '',
    selectedSugIndex: 0,
    searchHistory: []
};

/* Should move this reducer to a different file*/
const reducer = (state = initialState, action) => {
    if (action.type==='undefined') {
      return state;
    } else if (action.type==="showSuggestionFn") {
      return Object.assign({}, initialState, {
            shouldShowSuggestion: action.payload.shouldShowSuggestion,
            startingText: action.payload.startingText,
            selectedSugIndex: action.payload.selectedSugIndex,
            searchHistory: state.searchHistory
          })
    } else if (action.type==="hideSuggestionFn") {
      return Object.assign({}, initialState, {
            shouldShowSuggestion: action.payload.shouldShowSuggestion,
            finalSearchQuery: state.finalSearchQuery // need to make sure finalSearchQuery is not set to null again
          });
    } else if (action.type==="addSearchQuery") {
      initialState.searchHistory.unshift(action.payload.finalSearchQuery);
      if (initialState.searchHistory.length>3) {
        initialState.searchHistory.pop();
      }
      return Object.assign({}, initialState, {
            finalSearchQuery: action.payload.finalSearchQuery
          })
    }
    return state;
}

const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(<Provider store={store}>
                  <App/>
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
