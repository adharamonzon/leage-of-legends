import React from 'react';
import { Link } from 'react-router-dom';
/* import PropTypes from 'prop-types';*/
interface Game {
  id: number;
  tag: string;
  title: string;
  price: string;
  image?: string;
  imgDetail?: string;
  imgDetailBG?: string;
  description: string;
}
interface Props{
  selectedGame: Game;
}
const Detail:React.FC<Props> = (props) => {
  return <section className="detail">
    <Link to="/" className="detail__iconContainer link">
      <i className="fas fa-chevron-left detail__iconContainer__icon"></i>
    </Link>
    <div className="detail__tagContainer uppercase">
      <span className="detail__tagContainer--icon"><i className="fas fa-medal"></i></span>
      {props.selectedGame.tag}
    </div>
    <h2 className="detail__title">{props.selectedGame.title}</h2>
    <div className="detail__price">
      <p className="detail__price--text">{props.selectedGame.price}<span className="uppercase">usd</span></p>
       <button className="detail__price--btn uppercase">Install now </button>
    </div>
    <div className="detail__description">
    <div className="detail__description--imgContainer">
      <img src={props.selectedGame.imgDetail} alt={`Fotografía del juego ${props.selectedGame.title}`} />
    </div>
    <p className="detail__description--text">{props.selectedGame.description}</p>
    </div>
  </section>
}

export default Detail;

/* Detail.propTypes = {
  game: PropTypes.object,
} */