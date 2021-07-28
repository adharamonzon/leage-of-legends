import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
//componentes
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Detail from './Detail/Detail';
//data
import data from '../data/data.json';
//estilos
import './App.scss';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setData();
  }, []) //para prevenir un bucle infinito

  const setData = () => {
    setGames(data);
  }
  const gameDetail = (props) => {
    //props => history /location/match del link
    let selectedGame = games.find((game) => {
      return game.id === parseInt(props.match.params.id)
    })
    if (selectedGame !== undefined){
      return <Detail selectedGame={selectedGame} />
    }
  }
  return (
    <div className="App">
      <Route exact path="/">
        <Header />
        <Main games={games}/>
      </Route>
      <Route path='/game/:id' render={gameDetail} />
    </div>
  );
}

export default App;

