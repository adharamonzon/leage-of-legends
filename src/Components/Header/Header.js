import React from 'react'; 

const Header = () => {
  return <header className="header">
  <small className="header__subtitle">Awarded and recommended</small>
  <h1 className="header__title">Leage of <span className="capitalize">legends</span></h1>
  <p className="header__text">Leago of <span className="capitalize">legends</span> is a fast-paced, competitive online game that blends the speed and intensity of an <span className="uppercase">rts</span> with <span className="uppercase">rpg</span> elements</p>
  <div className="header__btnContainer">
    <button href="./#" title="install game" className="header__btnContainer--btnInstall btn uppercase">Install game</button>
    <button href="./#" title="add to favorites" className="header__btnContainer--btnAdd uppercase">Add to favorites</button>

  </div>
  </header>
};

export default Header;