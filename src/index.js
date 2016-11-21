import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.less';
import 'font-awesome-webpack';
import React from 'react';
import {Provider} from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {loadProducts} from './actions/productActions';
import {loadCoupons} from './actions/couponActions';

const store = configureStore();
store.dispatch(loadProducts());
store.dispatch(loadCoupons());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('content')
);