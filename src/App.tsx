import React from 'react';
import logo from './logo.svg';
import './App.css';
import DialPad from './dialpad/dialpad';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DialPad></DialPad>
      </header>
    </div>
  );
}

export default App;
