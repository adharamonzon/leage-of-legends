import React from 'react';

import back from '../../assets/icons/back.png';

const Detail = (props) => {
  console.log(props);
  return <section className="detail">
   <div className="detail__imgContainer">
    <img className="detail__imgContainer--img" src={props.selectedGame.imgDetailBG} alt={`fondo de ${props.selectedGame.title}`} />
   </div>
   <div className="detail__container">
    <div className="detail-iconContainer">
      <i className="fas fa-chevron-left"></i>
    </div>
   </div>
  </section>
}

export default Detail;
