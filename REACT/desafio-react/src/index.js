import React from 'react';
import ReactDOM from 'react-dom/client';
// import Home from './containers/Home';
import Pedidos from './containers/Pedidos';
import GlobalStyle from './globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Pedidos />
    <GlobalStyle />
  </>,
);


