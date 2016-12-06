import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.less';
import 'font-awesome-webpack';
import React from 'react';
import {Provider} from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import * as types from './actions/actionTypes';
import {loadWooResource} from './actions/wooResourceActions';

const store = configureStore();
store.dispatch(loadWooResource(types.LOAD_PRODUCTS_SUCCESS));
store.dispatch(loadWooResource(types.LOAD_COUPONS_SUCCESS));

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('content')
);