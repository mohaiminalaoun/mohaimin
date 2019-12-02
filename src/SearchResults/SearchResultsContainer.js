import React, {useState, useEffect} from 'react';
import SearchResult from './SearchResult';
import SuggestionsData from '../data/suggestionsData';
import './SearchResult.css';


const SearchResultsContainer = (props) => {
    const query = (props.currentSearch && props.currentSearch.toLowerCase()) || (props.searchHistory && props.searchHistory[0]);
    // if exact match, we skip partial matches
    const exactMatch = SuggestionsData.suggestionItemsData.filter((data) => {
      if (query && data.text.toLowerCase() === query.trim()) {
        return true;
      }
      return false;
    });
    const matchingItems = exactMatch.length === 1 ? exactMatch : SuggestionsData.suggestionItemsData.filter((data) => {
      const arr = query && query.split && query.split(' ');
      if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
          let w = arr[i];
          if (data.href.indexOf(w)!==-1 || data.text.indexOf(w)!==-1 || data.tags.indexOf(w)!==-1){
            return true;
          }
        }
      }
      return false;
    });


    // map into list of SearchResults
    const results = matchingItems.map( (item) => {
      return <SearchResult key={item.text} href={item.href} website={item.website} text={item.text} icon={item.icon}></SearchResult>;
    });

    return (
        <div className="search-results-container">{(props.shouldShowSuggestion) ? null : results}</div>
    );
  }


export default SearchResultsContainer;
