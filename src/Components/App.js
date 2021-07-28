import React, { useState, useEffect } from 'react';
//componentes
import Header from './Header/Header.js';
import Main from './Main/Main.js';
//data
import data from '../data/data.json';
import './App.scss';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setData();
  }, []) //para prevenir un bucle infinito

  const setData = () => {
    setGames(data);
  }

  return (
    <div className="App">
    <Header />
    <Main games={games}/>
    </div>
  );
}

export default App;

