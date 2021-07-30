import React from 'react';/* 
import PropTypes from 'prop-types'; */

import Card from '../Card/Card';


interface Props{
  games: Array<any>;
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

/* Main.propTypes = {
  games: PropTypes.array,
} */