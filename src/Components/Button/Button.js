import React from 'react';

const Button = (props) => {
  console.log(props);
  return <button className=" btn uppercase">{props.text}</button>
}

export default Button;