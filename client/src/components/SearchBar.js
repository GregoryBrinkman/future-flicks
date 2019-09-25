import React from 'react';
import TimedTextInput from './Inputs/TimedTextInput';

function SearchBar(props) {
  const passValue = (value) => {
    if (value !== '') {
      searchMovieApi(value);
    }
  }

  const searchMovieApi = (search) => {
    const fetchString = `http://localhost:3001/api/search?search=${search}`;

    fetch(fetchString)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const { results } = json;
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
