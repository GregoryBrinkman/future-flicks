import React from 'react';

export default React.createContext({
  movies: [],
  addToWatchList: movie => {},
  removeFromWatchList: movie => {}
});
