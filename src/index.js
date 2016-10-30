import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome-webpack';
import React from 'react';
import {Provider} from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

render(
  <Provider>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('App')
);
