import React, { useState } from 'react';
import SearchBarResults from './SearchBarResults';
import SearchBar from './SearchBar';

function SearchBarContainer(props) {
  const [results, setResults] = useState({});

  console.log(results);
  console.log(results);
  console.log(results);
  return (
    <div className="SearchBarContainer">
      <SearchBar setResults={setResults} />
      <SearchBarResults addToWatchList={props.addToWatchList} results={results} />
    </div>
  );
}

export default SearchBarContainer;
