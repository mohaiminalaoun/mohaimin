const initialState = {
    finalSearchQuery: null,
    shouldShowSuggestion: false,
    startingText: '',
    selectedSugIndex: 0,
    searchHistory: [],
    currentSearch: null
};

const SearchReducer = (state = initialState, action) => {
    if (action.type==='undefined') {
      return state;
    }

    else if (action.type==="showSuggestionFn") {
      return Object.assign({}, initialState, {
            shouldShowSuggestion: action.payload.shouldShowSuggestion,
            startingText: action.payload.startingText,
            selectedSugIndex: action.payload.selectedSugIndex,
            searchHistory: state.searchHistory
          })
    }

    else if (action.type==="hideSuggestionFn") {
      return Object.assign({}, initialState, {
            shouldShowSuggestion: action.payload.shouldShowSuggestion,
            finalSearchQuery: state.finalSearchQuery, // need to make sure finalSearchQuery is not set to null again
            currentSearch: state.currentSearch
          });
    }

    else if (action.type==="addSearchQuery") {
      initialState.searchHistory.unshift(action.payload.finalSearchQuery);
      if (initialState.searchHistory.length>3) {
        initialState.searchHistory.pop();
      }
      return Object.assign({}, initialState, {
            finalSearchQuery: action.payload.finalSearchQuery
          })
    }

    else if (action.type === "updateCurrentSearch") {
      return Object.assign({},initialState,{
        currentSearch: action.payload,
        finalSearchQuery: state.finalSearchQuery
      });
    }
    return state;
}

export default SearchReducer;
