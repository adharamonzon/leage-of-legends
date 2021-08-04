import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom';
//componentes
import Header from './Header/Header.js';
import Main from './Main/Main';
import Detail from './Detail/Detail';
//data y types/interfaces
import data from '../data/data.json';
import GameType from './types';
//estilos
import './App.scss';

type RouteProps = RouteComponentProps<{
    id: string;
}>

const App: React.FC = () => {
  const [games, setGames] = useState<GameType[]>([]);
  
  useEffect(() => {
    setData();
  }, []) //para prevenir un bucle infinito



  const setData = () => {
    setGames(data);
  }
  const gameDetail = (props:RouteProps) => {
    //props => history /location/match/params/id del link
    let selectedGame:any = games.find((game) => {
      return game.id === parseInt(props.match.params.id)
    })
    if (selectedGame !== undefined){
      return <Detail selectedGame={selectedGame} />
    }
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Header />
          <Main games={games}/>
        </Route>
        <Route path='/game/:id' render={gameDetail} />
      </div>
    </BrowserRouter>
  );
} 

export default App;

