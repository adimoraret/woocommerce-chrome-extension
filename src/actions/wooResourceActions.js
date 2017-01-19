import {getListFullUrl} from '../api/restApi';
import {getInfoFullUrl} from '../api/restApi';
import axios from 'axios';
import config from '../config/config';

function loadListSuccess(resourceName, response) {
  response.visibleLoader = false;  
  return { type: `${resourceName}_LIST_SUCCESS`, resource: response};
}

function loadInfoSuccess(resourceName, response) {
  response.visibleLoader = false;  
  return { type: `${resourceName}_INFO_SUCCESS`, resource: response};
}

export function loadWooResource(resourceId, page, appliedFilter={filterType:null, appliedFilter:null}, appliedSort={sortBy:null, direction:0}) {
  const resource = config.resources.find(x => x.id === resourceId);
  return function(dispatch) {
    return axios({
          url: getListFullUrl(resource.list.url, page, config.grid.pagination.itemsPerPage, appliedFilter.filterType, appliedFilter.filterValue, appliedSort.sortBy, appliedSort.direction),
          timeout: 20000,
          method: 'get',
          responseType: 'json'
        })
          .then(function(response) {
            const rsp = {
              rows: response.data,
              total: parseInt(response.headers['x-wp-total']),
              page: page,
              appliedFilter: {filterType: appliedFilter.filterType, filterValue: appliedFilter.filterValue},
              appliedSort: {sortBy: appliedSort.sortBy, direction: appliedSort.direction}
            };
            dispatch(loadListSuccess(resource.name, rsp));
          })
          .catch(function(response){
            console.log("Error: " + response);
            dispatch(receiveError(resourceType, response.data));
            dispatch(pushState(null,'/error'));
          });
  };
}

export function loadWooResourceInfo(resourceId, itemId) {
  const resource = config.resources.find(x => x.id === resourceId);  
  return function(dispatch) {
    return axios({
          url: getInfoFullUrl(resource.view.url, itemId),
          timeout: 20000,
          method: 'get',
          responseType: 'json'
        })
          .then(function(response) {
            const rsp = {
              item: response.data
            };
            dispatch(loadInfoSuccess(resource.name, rsp));
          })
          .catch(function(response){
            console.log("Error: " + response);
            dispatch(receiveError(resourceType, response.data));
            dispatch(pushState(null,'/error'));
          });
  };
}

export function showLoader(resourceId){
  const resource = config.resources.find(x => x.id === resourceId);
  return function(dispatch) {
      dispatch(
        {type: `${resource.name}_LIST_LOAD`, resource: {visible:true}}
      );
  }
}

export function showInfoLoader(resourceId){
  const resource = config.resources.find(x => x.id === resourceId);
  return function(dispatch) {
      dispatch(
        {type: `${resource.name}_INFO_LOAD`, resource: {visible:true}}
      );
  }
}