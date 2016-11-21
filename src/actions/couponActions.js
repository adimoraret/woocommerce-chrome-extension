import * as types from './actionTypes';
import {getCouponsUrl} from '../api/restApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import axios from 'axios';

export function loadCouponsSuccess(coupons) {
  return { type: types.LOAD_COUPONS_SUCCESS, coupons};
}

export function loadCoupons() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return axios({
          url: getCouponsUrl(),
          timeout: 20000,
          method: 'get',
          responseType: 'json'
        })
          .then(function(response) {
            dispatch(loadCouponsSuccess(response.data));
          })
          .catch(function(response){
            dispatch(receiveError(response.data));
            dispatch(pushState(null,'/error'));
          });
  };
}
