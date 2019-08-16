import React from 'react';
import TimedTextInput from './Inputs/TimedTextInput';

function SearchBar(props) {
  const passValue = (value) => {
    if (value !== '') {
      searchMovieApi(value);
    }
  }

  const searchMovieApi = (search) => {
    const apiKey = "77ce29e1";
    const apiUrl = "http://www.omdbapi.com"
    const fetchString = `${apiUrl}/?s=${search}&apikey=${apiKey}`;

    fetch(fetchString)
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        props.setResults(results);
      });
  }

  return (
    <div className="SearchBar">
      <TimedTextInput passValue={passValue} name="search-bar" />
    </div>
  );
}

export default SearchBar;
