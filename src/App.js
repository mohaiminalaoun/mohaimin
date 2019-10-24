import React from 'react';
import logo from './logo.svg';
import half from './half.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo shadow" alt="logo" />
        <img src={half} className="App-logo shadow half" alt="logo" />
        <p>
          Welcome to my site!
        </p>

      </header>
    </div>
  );
}

export default App;
