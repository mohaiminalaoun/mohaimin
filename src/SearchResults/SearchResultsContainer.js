import React, {useState, useEffect} from 'react';
import SearchResult from './SearchResult';
import SuggestionsData from '../data/suggestionsData';
import './SearchResult.css';


const SearchResultsContainer = (props) => {

    const query = props.searchHistory && props.searchHistory[0];


    const matchingItems = SuggestionsData.suggestionItemsData.filter((data) => {
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
      return <SearchResult key={item.text} href={item.href} text={item.text}></SearchResult>;
    });

    return (
        <div className="search-results-container">{results}</div>
    );
  }


export default SearchResultsContainer;
