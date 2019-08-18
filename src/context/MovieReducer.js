export const LOAD_MOVIES = "LOAD_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";


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
  return { movies: movieArray };
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
    return { movies: list };
  }
};

const loadMovies = () => {
  let list = [];
  if (localStorage.getItem("FutureFlicksMovieList") !== null && Array.isArray(JSON.parse(localStorage.getItem("FutureFlicksMovieList")))) {
    list = JSON.parse(localStorage.getItem("FutureFlicksMovieList"));
  }

  return { movies: list };
}




export const MovieReducer = (state, action) => {
  console.log(state, action)
  console.log(state, action)
  console.log(state, action)
  switch (action.type) {
    case ADD_MOVIE: 
      return addToWatchList(action.movie);
    case DELETE_MOVIE: 
      return removeFromWatchList(action.movie);
    case LOAD_MOVIES: 
      return loadMovies();
    default: 
      return state;
  }
};
