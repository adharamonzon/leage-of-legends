import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss';
import App from './Components/App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);