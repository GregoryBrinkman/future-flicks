import React from 'react';
import AddIcon from './Icons/AddIcon';

function SearchBarResultItem(props) {
  return (
    <div className="Movie">
      <img src={props.result.Poster} alt={`${props.result.Title} Poster`} />
      <div className="item-information">
        <b>{props.result.Title}</b>
        <p>{props.result.Year}</p>
      </div>
      <AddIcon handlePressed={() => props.addToWatchList(props.result)} />
    </div>
  );
}

export default SearchBarResultItem;
