import React from 'react';
import SearchBarResultItem from './SearchBarResultItem';

function SearchBarResults(props) {
  if(props.results.hasOwnProperty("Error")) {
    return <b style={{color: "red"}}>{props.results.Error}</b>;
  }

  if(!props.results.hasOwnProperty('Search')) {
    return null;
  }

  return (
    <div className="SearchBarResults">
      {props.results.Search.map((result, index) => {
        return <SearchBarResultItem key={`result${index}`} result={result} addToWatchList={props.addToWatchList} />
      })}
    </div>
  );
}

export default SearchBarResults;
