import * as types from './actionTypes';
import {getProductsUrl} from '../api/restApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import axios from 'axios';

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products};
}

export function loadProducts() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return axios({
          url: getProductsUrl(),
          timeout: 20000,
          method: 'get',
          responseType: 'json'
        })
          .then(function(response) {
            dispatch(loadProductsSuccess(response.data));
          })
          .catch(function(response){
            dispatch(receiveError(response.data));
            dispatch(pushState(null,'/error'));
          });
  };
}
