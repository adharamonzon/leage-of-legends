import React from 'react';
import PropTypes from 'prop-types';


const Button = (props) => {
  return <button className=" btn uppercase">{props.text}</button>
}

export default Button;

Button.propTypes = {
  text: PropTypes.string,
}