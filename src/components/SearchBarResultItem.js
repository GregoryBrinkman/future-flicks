import React from 'react';

function SearchBarResultItem(props) {
  const addMovie = () => {
    props.addToWatchList(props.result);
  }

  return (
    <div onClick={addMovie} className="Movie">
      <img src={props.result.Poster} alt={`${props.result.Title} Poster`} />
      <div className="item-information">
        <b>{props.result.Title}</b>
        <p>{props.result.Year}</p>
      </div>
    </div>
  );
}

export default SearchBarResultItem;
