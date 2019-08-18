import React from 'react';
import DeleteIcon from './Icons/DeleteIcon';

function Movie(props) {
  return (
    <div className="Movie">
      <img src={props.movie.Poster} alt={`${props.movie.Title} Poster`} />
      <div className="item-information">
        <b>{props.movie.Title}</b>
        <p>{props.movie.Year}</p>
      </div>
      <DeleteIcon handlePressed={() => props.removeFromWatchList(props.movie)} />
    </div>
  );
}

export default Movie;
