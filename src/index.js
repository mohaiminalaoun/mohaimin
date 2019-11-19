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
    selectedSugIndex: 0
};

/* Should move this reducer to a different file*/
const reducer = (state = initialState, action) => {
    if (action.type==='undefined') {
      return state;
    } else if (action.type==="showSuggestionFn") {

      return Object.assign({}, initialState, {
            shouldShowSuggestion: action.payload.shouldShowSuggestion,
            startingText: action.payload.startingText,
            selectedSugIndex: action.payload.selectedSugIndex
          })
    } else if (action.type==="hideSuggestionFn") {
      return Object.assign({}, initialState, {
            shouldShowSuggestion: action.payload.shouldShowSuggestion
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
