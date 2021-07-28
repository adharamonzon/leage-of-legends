import React from 'react';
import { Link } from 'react-router-dom';
//componentes
import Button from '../Button/Button';

const Card = (props) => {

  return (
  <article className="card"> 
    <Link className="card__link" to={`/game/${props.game.id}`}>
      <img className="card__img" src={props.game.image} alt="Horizon"/> 
      <section className="card__info">
      <div className="card__info--textContainer">
       <p className="card__info--textContainer__title">{props.game.title}</p>
       <p className="card__info--textContainer__price">{props.game.price} <span className="uppercase">usd</span></p>
      </div>
      <Button /> 
      </section>
    </Link>
  </article>)
}

export default Card;