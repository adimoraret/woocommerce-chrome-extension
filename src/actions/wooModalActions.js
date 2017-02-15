import {getInfoFullUrl} from '../api/restApiUrlHandler';
import axios from 'axios';
import config from '../config/config';
import * as types from './actionTypes';
import * as validation from './validation';

export function openViewModal(resourceId) {
  return {type: types.VIEW_MODAL_ACTION.OPEN, resourceId:resourceId};
}

export function closeViewModal() {
  return {type: types.VIEW_MODAL_ACTION.CLOSE};
}

export function openEditModal(resourceId, itemId) {
  return {type: types.EDIT_MODAL_ACTION.OPEN,  resourceId:resourceId};
}

export function closeEditModal() {
  return {type: types.EDIT_MODAL_ACTION.CLOSE};
}

export function loadWooResourceEditModal(resourceId, itemId) {
  const resource = config.resources.find(x => x.id === resourceId);  
  validation.validateResource(resource);
  return function(dispatch) {
    return axios({
          url: getInfoFullUrl(resource.edit.url, itemId),
          timeout: 20000,
          method: 'get',
          responseType: 'json'
        })
          .then(function(response) {
            const rsp = {
              resourceId: resourceId,
              item: response.data
            };
            dispatch(loadWooResourceEditModalSuccess(rsp));
          })
          .catch(function(error){
            throw(error);
          });
  };
  function loadWooResourceEditModalSuccess(response) { 
    return {type: types.EDIT_MODAL_ACTION.LOAD, resource:response};
  }
}

export function loadWooResourceViewModal(resourceId, itemId) {
  const resource = config.resources.find(x => x.id === resourceId);  
  validation.validateResource(resource);
  return function(dispatch) {
    return axios({
          url: getInfoFullUrl(resource.view.url, itemId),
          timeout: 20000,
          method: 'get',
          responseType: 'json'
        })
          .then(function(response) {
            const rsp = {
              resourceId: resourceId,
              item: response.data
            };
            dispatch(loadWooResourceViewModalSuccess(rsp));
          })
          .catch(function(error){
            throw(error);
          });
  };
  function loadWooResourceViewModalSuccess(response) { 
    return {type: types.VIEW_MODAL_ACTION.LOAD, resource:response};
  }  
}

