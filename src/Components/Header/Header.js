import React from 'react'; 

const Header = () => {
  return(
    <header className="header">
      <div id="carouselExampleIndicators" className="carousel slide header__carousel" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active header__item1">
            <div className="header__item1--content">
              <small className="header__subtitle">Awarded and recommended</small>
              <h1 className="header__title">Leage of <span className="capitalize">legends</span></h1>
              <p className="header__text">Leago of <span className="capitalize">legends</span> is a fast-paced, competitive online game that blends the speed and intensity of an <span className="uppercase">rts</span> with <span className="uppercase">rpg</span> elements</p>
              <div className="header__btnContainer">
                <button href="./#" title="install game" className="header__btnContainer--btnInstall btnType uppercase">Install game</button>
                <button href="./#" title="add to favorites" className="header__btnContainer--btnAdd uppercase">Add to favorites</button>
              </div>
            </div>
           </div> 
          <div className="carousel-item header__item2">
            <div className="header__item2--content">
              <small className="header__subtitle">Awarded and recommended</small>
              <h1 className="header__title">Leage of <span className="capitalize">legends</span></h1>
              <p className="header__text">Leago of <span className="capitalize">legends</span> is a fast-paced, competitive online game that blends the speed and intensity of an <span className="uppercase">rts</span> with <span className="uppercase">rpg</span> elements</p>
              <div className="header__btnContainer">
                <button href="./#" title="install game" className="header__btnContainer--btnInstall btnType uppercase">Install game</button>
                <button href="./#" title="add to favorites" className="header__btnContainer--btnAdd uppercase">Add to favorites</button>
              </div>
            </div>
          </div>
          <div className="carousel-item header__item3">
            <div className="header__item3--content">
              <small className="header__subtitle">Awarded and recommended</small>
              <h1 className="header__title">Leage of <span className="capitalize">legends</span></h1>
              <p className="header__text">Leago of <span className="capitalize">legends</span> is a fast-paced, competitive online game that blends the speed and intensity of an <span className="uppercase">rts</span> with <span className="uppercase">rpg</span> elements</p>
              <div className="header__btnContainer">
                <button href="./#" title="install game" className="header__btnContainer--btnInstall btnType uppercase">Install game</button>
                <button href="./#" title="add to favorites" className="header__btnContainer--btnAdd uppercase">Add to favorites</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
  
};

export default Header;