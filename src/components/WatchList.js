import React from 'react';
import SearchBarContainer from './SearchBarContainer';
import MovieList from './MovieList';
import MovieContext from '../context/MovieContext';

function WatchList() {
  return (
    <MovieContext.Consumer>
      {context => (
        <div className="WatchList">
          <SearchBarContainer addToWatchList={context.addToWatchList} />
          <MovieList movies={context.movies} removeFromWatchList={context.removeFromWatchList} />
        </div>
      )}
    </MovieContext.Consumer>
  );
}

export default WatchList;
