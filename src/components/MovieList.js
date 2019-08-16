import React from 'react';
import Movie from './Movie';

function MovieList(props) {
  return (
    <div className="MovieList">
      <h3>Movies to watch</h3>
      {props.movies.map((movie, index) => {
        return <Movie key={`movie${index}`} removeFromWatchList={props.removeFromWatchList} movie={movie} />
      })}
    </div>
  );
}

export default MovieList;
