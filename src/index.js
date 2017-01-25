import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.less';
import './styles/toastrOptions.js'
import 'font-awesome-webpack';
import React from 'react';
import {Provider} from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {loadWooResource} from './actions/wooResourceActions';
import config from './config/config';


const store = configureStore();
config.resources.map(resource =>
  store.dispatch(loadWooResource(resource.id, 1))
);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('content')
);