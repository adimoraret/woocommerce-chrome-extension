import {getListFullUrl,getInfoFullUrl} from '../api/restApiUrlHandler';
import axios from 'axios';
import config from '../config/config';

export function loadWooResource(resourceId, page, appliedFilter={filterType:null, appliedFilter:null}, appliedSort={sortBy:null, direction:0}) {
  const resource = config.resources.find(x => x.id === resourceId);
  validateResource(resource);
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
          .catch(function(error){
            throw(error);
          });
  };
}

export function loadWooResourceInfo(resourceId, itemId) {
  const resource = config.resources.find(x => x.id === resourceId);  
  validateResource(resource);
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
          .catch(function(error){
            throw(error);
          });
  };
}

export function hideLoader(resourceId){
  const resource = config.resources.find(x => x.id === resourceId);
  return function(dispatch) {
      dispatch(
        {type: `${resource.name}_LIST_CLEAR`, resource: {visible:false}}
      );
  };
}

export function showLoader(resourceId){
  const resource = config.resources.find(x => x.id === resourceId);
  return function(dispatch) {
      dispatch(
        {type: `${resource.name}_LIST_CLEAR`, resource: {visible:true}}
      );
  };
}

export function showInfoLoader(resourceId){
  const resource = config.resources.find(x => x.id === resourceId);
  return function(dispatch) {
      dispatch(
        {type: `${resource.name}_INFO_CLEAR`, resource: {visible:true}}
      );
  };
}

function loadListSuccess(resourceName, response) {
  response.visibleLoader = false;  
  return { type: `${resourceName}_LIST_SUCCESS`, resource: response};
}

function loadInfoSuccess(resourceName, response) {
  response.visibleLoader = false;  
  return { type: `${resourceName}_INFO_SUCCESS`, resource: response};
}

function validateResource(resource){
  if (!resource) {
    throw new Error("Invalid resource");
  }
}