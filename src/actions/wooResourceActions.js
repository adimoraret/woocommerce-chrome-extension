import {getWooResourceUrl} from '../api/restApi';
import {getResourceColumns} from '../api/restApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import axios from 'axios';

export function loadSuccess(resourceType, resource) {
  return { type: resourceType.SUCCESS, resource};
}

export function loadWooResource(resourceType) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return axios({
          url: getWooResourceUrl(resourceType),
          timeout: 20000,
          method: 'get',
          responseType: 'json'
        })
          .then(function(response) {
            const rsp = {
              title: "My Updated title",
              columns:getResourceColumns(resourceType.NAME),
              rows: response.data
            };
            dispatch(loadSuccess(resourceType, rsp));
          })
          .catch(function(response){
            console.log("Error: " + response);
            dispatch(receiveError(resourceType, response.data));
            dispatch(pushState(null,'/error'));
          });
  };
}
