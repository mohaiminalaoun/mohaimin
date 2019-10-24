import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo shadow" alt="logo" />
        <p>
          Welcome to my site!
        </p>

      </header>
    </div>
  );
}

export default App;
