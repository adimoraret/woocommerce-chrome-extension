import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.less';
import './styles/toastrOptions.js';
import 'font-awesome-webpack';
import React from 'react';
import {Provider} from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {loadWooResource, showLoader, hideLoader} from './actions/wooResourceActions';
import config from './config/config';
import toastr from 'toastr';

const store = configureStore();
config.resources.map(resource => {
    store.dispatch(showLoader(resource.id));
    store.dispatch(loadWooResource(resource.id, 1))
      .catch((error) => {
        toastr.error(error);        
        store.dispatch(hideLoader(resource.id));
      });
  }
);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('content')
);