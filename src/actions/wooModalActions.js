import * as types from './actionTypes';

export function openModal(resourceId) {
  return {type: types.MODAL_ACTION.OPEN, resourceId:resourceId};
}

export function closeModal(action) {
  return {type: types.MODAL_ACTION.CLOSE};
}
