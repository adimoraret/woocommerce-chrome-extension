import {getListFullUrl} from '../api/restApi';
import {getInfoFullUrl} from '../api/restApi';
import axios from 'axios';

function loadListSuccess(resource, response) {
  response.visibleLoader = false;  
  return { type: `${resource.name}_LIST_SUCCESS`, resource: response};
}

function loadInfoSuccess(resource, response) {
  response.visibleLoader = false;  
  return { type: `${resource.name}_INFO_SUCCESS`, resource: response};
}

export function loadWooResource(resource) {
  return function(dispatch) {
    return axios({
          url: getListFullUrl(resource),
          timeout: 20000,
          method: 'get',
          responseType: 'json'
        })
          .then(function(response) {
            const rsp = {
              rows: response.data
            };
            dispatch(loadListSuccess(resource, rsp));
          })
          .catch(function(response){
            console.log("Error: " + response);
            dispatch(receiveError(resourceType, response.data));
            dispatch(pushState(null,'/error'));
          });
  };
}

export function loadWooResourceInfo(resource, id) {
  return function(dispatch) {
    return axios({
          url: getInfoFullUrl(resource, id),
          timeout: 20000,
          method: 'get',
          responseType: 'json'
        })
          .then(function(response) {
            const rsp = {
              item: response.data
            };
            dispatch(loadInfoSuccess(resource, rsp));
          })
          .catch(function(response){
            console.log("Error: " + response);
            dispatch(receiveError(resourceType, response.data));
            dispatch(pushState(null,'/error'));
          });
  };
}

export function showLoader(resource){
  return function(dispatch) {
      dispatch(
        {type: `${resource.name}_LIST_LOAD`, resource: {visible:true}}
      );
  }
}
