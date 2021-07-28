import React from 'react';
import Button from '../Button/Button';

const Card = (props) => {
  console.log(props);
  return <article className="card">
    <img className="card__img" src={props.game.image} alt="Horizon"/> 
    <section className="card__info">
    <div className="card__info--textContainer">
      <p className="card__info--textContainer__title">{props.game.title}</p>
      <p className="card__info--textContainer__price">{props.game.price} <span className="uppercase">usd</span></p>
    </div>
      <Button /> 
    </section>
  </article>
}

export default Card;