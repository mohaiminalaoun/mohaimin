import { LRUCache } from "./LRU";

const initialState = {
    finalSearchQuery: null,
    shouldShowSuggestion: false,
    startingText: "",
    selectedSugIndex: -1,
    searchHistory: [],
    currentSearch: null,
    LRUCache: null
  },
  ACT_TYPES = {
    SHOW_SUG_FN: "showSuggestionFn",
    HIDE_SUG_FN: "hideSuggestionFn",
    ADD_SEARCH_Q: "addSearchQuery",
    UPDATE_SEARCH: "updateCurrentSearch"
  };

const SearchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === "undefined") {
    return state;
  } else if (
    type === ACT_TYPES.SHOW_SUG_FN ||
    type === ACT_TYPES.HIDE_SUG_FN ||
    type === ACT_TYPES.ADD_SEARCH_Q ||
    type === ACT_TYPES.UPDATE_SEARCH
  ) {
    const {
      shouldShowSuggestion,
      startingText,
      selectedSugIndex,
      finalSearchQuery
    } = payload;
    if (type === ACT_TYPES.SHOW_SUG_FN) {
      return Object.assign({}, initialState, {
        shouldShowSuggestion: shouldShowSuggestion,
        startingText: startingText,
        selectedSugIndex: selectedSugIndex,
        searchHistory: state.searchHistory
      });
    } else if (type === ACT_TYPES.HIDE_SUG_FN) {
      return Object.assign({}, initialState, {
        shouldShowSuggestion: shouldShowSuggestion,
        finalSearchQuery: state.finalSearchQuery, // need to make sure finalSearchQuery is not set to null again
        currentSearch: state.currentSearch
      });
    } else if (type === ACT_TYPES.ADD_SEARCH_Q) {
      if (initialState.searchHistory.length == 0) {
        initialState.LRUCache = new LRUCache(3);
      }
      let key = finalSearchQuery.toLowerCase(),
        value = finalSearchQuery;
      initialState.LRUCache.put(key, value);
      initialState.searchHistory.unshift(finalSearchQuery);
      if (initialState.searchHistory.length > 3) {
        initialState.searchHistory.pop();
      }
      return Object.assign({}, initialState, {
        finalSearchQuery: finalSearchQuery
      });
    } else if (type === ACT_TYPES.UPDATE_SEARCH) {
      return Object.assign({}, initialState, {
        currentSearch: payload,
        finalSearchQuery: state.finalSearchQuery
      });
    }
  }
  return state;
};

export default SearchReducer;
