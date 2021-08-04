import React from 'react';

import '@testing-library/jest-dom/extend-expect'; 
import { render } from '@testing-library/react'; 

import Button from './Button';


//comprobar que el boton se renderiza de manera adecuada?
test('render button', ( )=> {
  const button = {
    content: 'Buy now',
  };
   const component = render(<Button button={button} />)
   expect(component.container).toHaveTextContent(button.content)
});
