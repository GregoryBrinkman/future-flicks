import React, { useState, useEffect } from 'react';
import SearchBarContainer from './SearchBarContainer';
import MovieList from './MovieList';

function WatchList() {
  const [movies, setMovies] = useState([]);

  const addToWatchList = (item) => {
    let movieArray = [];

    if (localStorage.getItem("FutureFlicksMovieList") !== null && Array.isArray(JSON.parse(localStorage.getItem("FutureFlicksMovieList")))) {
      let duplicateFlag = false;
      let list = JSON.parse(localStorage.getItem("FutureFlicksMovieList"));

      for(let i = 0; i < list.length; i++) {
        if(item.imdbID === list[i].imdbID) {
          duplicateFlag = true;
        }
      }
      
      if(!duplicateFlag) {
        movieArray.push(item);
      }

      movieArray = movieArray.concat(list);
    } else {
      movieArray.push(item);
    }

    localStorage.setItem("FutureFlicksMovieList", JSON.stringify(movieArray));
    setMovies(movieArray);
  };

  const removeFromWatchList = (item) => {
    if (localStorage.getItem("FutureFlicksMovieList") !== null && Array.isArray(JSON.parse(localStorage.getItem("FutureFlicksMovieList")))) {
      let foundIndex = -1;
      let list = JSON.parse(localStorage.getItem("FutureFlicksMovieList"));

      for(let i = 0; i < list.length; i++) {
        if(item.imdbID === list[i].imdbID) {
          foundIndex = i;
          break;
        }
      }
      
      if(foundIndex !== -1) {
        list.splice(foundIndex, 1);
      }

      localStorage.setItem("FutureFlicksMovieList", JSON.stringify(list));
      setMovies(list);
    }
  };

  return (
    <div className="WatchList">
      <SearchBarContainer addToWatchList={addToWatchList}/>
      <MovieList movies={movies} removeFromWatchList={removeFromWatchList} />
    </div>
  );
}

export default WatchList;
