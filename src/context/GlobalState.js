import React, { useEffect, useReducer } from 'react';
import MovieContext from './MovieContext';
import { MovieReducer, ADD_MOVIE, DELETE_MOVIE, LOAD_MOVIES } from './MovieReducer';


const GlobalState = props => {
  const [movieState, dispatch] = useReducer(MovieReducer, { movies: [] });

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = movie => {
    dispatch({ type: LOAD_MOVIES });
  };

  const removeFromWatchList = movie => {
    dispatch({ type: DELETE_MOVIE, movie: movie });
  };

  const addToWatchList = movie => {
    dispatch({ type: ADD_MOVIE, movie: movie });
  };

  return (
    <MovieContext.Provider
      value={{
        movies: movieState.movies,
        addToWatchList: addToWatchList,
        removeFromWatchList: removeFromWatchList
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default GlobalState;
