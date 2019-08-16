import React from 'react';

function Movie(props) {


console.log('movie')
console.log(props)
  const removeMovie = () => {
    props.removeFromWatchList(props.movie);
  }

  return (
    <div className="Movie" onClick={removeMovie}>
      <img src={props.movie.Poster} alt={`${props.movie.Title} Poster`} />
      <div className="item-information">
        <b>{props.movie.Title}</b>
        <p>{props.movie.Year}</p>
      </div>
    </div>
  );
}

export default Movie;
