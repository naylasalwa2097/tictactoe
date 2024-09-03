// src/App.js
import React from 'react';
import Board from './Board.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

export default App;