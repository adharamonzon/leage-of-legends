import React from 'react';
import { Link } from 'react-router-dom';
/* import PropTypes from 'prop-types'; */

//componentes
import Button from '../Button/Button';

interface Game {
  id: Number;
  image: string;
  title: string;
  price: string;
}

interface Props{
  game: Game;
}

const Card:React.FC<Props> = (props) => {

  return (
  <article className="card"> 
    <Link className="card__link" to={`/game/${props.game.id}`}>
      <img className="card__img" src={props.game.image} alt="Horizon"/> 
      <section className="card__info">
      <div className="card__info--textContainer">
       <p className="card__info--textContainer__title">{props.game.title}</p>
       <p className="card__info--textContainer__price">{props.game.price} <span className="uppercase">usd</span></p>
      </div>
      <Button/> 
      </section>
    </Link>
  </article>)
}

export default Card;

/* Card.propTypes = {
  game: PropTypes.object,
} */