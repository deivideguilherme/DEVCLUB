import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './containers/Home';
// import Users from './containers/Users';
import GlobalStyle from './styles/globalStyle';
import Routes from './routes'

ReactDOM.render(
    <>
        <Routes /> <GlobalStyle />
    </>,
    document.getElementById('root')
);

