import {getListFullUrl} from '../api/restApi';
import axios from 'axios';

function loadSuccess(resource, response) {
  response.visibleLoader = false;  
  return { type: `${resource.name}_LIST_SUCCESS`, resource: response};
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
            dispatch(loadSuccess(resource, rsp));
          })
          .catch(function(response){
            console.log("Error: " + response);
            dispatch(receiveError(resourceType, response.data));
            dispatch(pushState(null,'/error'));
          });
  };
}
