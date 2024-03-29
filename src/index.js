import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../styles/main.scss';

import App from './containers/App';
import configureStore from './stores/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('app')
);
