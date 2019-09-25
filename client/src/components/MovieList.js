import React from 'react';
import Movie from './Movie';

function MovieList(props) {
console.log(props.movies);
  return (
    <div className="MovieList">
      <h3>Movies to watch</h3>
      <div className="MovieListContainer">
        {props.movies.map((movie, index) => {
          return <Movie key={`movie${index}`} movie={movie} removeFromWatchList={props.removeFromWatchList} />
        })}
      </div>
    </div>
  );
}

export default MovieList;
