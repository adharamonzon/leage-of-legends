import React from 'react';
import Card from '../Card/Card';
import GameType from '../types';

interface Props{
  games: GameType[];
}

const Main:React.FC<Props> = (props) => {

    const games = props.games.map((game) => {
      return (
        <li className="main__list--item" key={game.id}>
          <Card game={game}/>
        </li>
      )})

  return (<main className="main">
    <h2 className="main__title uppercase">Bestsellers</h2>
    <ul className="main__list">{games}</ul>
  </main>)
};

export default Main;
