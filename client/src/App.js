import React from 'react';
import './App.css';
import WatchList from './components/WatchList';
import GlobalState from './context/GlobalState';

function App(props) {
  return (
    <GlobalState>
      <div className="App">
        <header className="App-header">
          <h1>Future Flicks</h1>
          <aside>"You'll get around to it..."</aside>
        </header>
        <WatchList />
      </div>
    </GlobalState>
  );
}

export default App;
