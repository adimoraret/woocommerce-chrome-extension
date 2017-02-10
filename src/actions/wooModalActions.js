import * as types from './actionTypes';

export function openViewModal(resourceId) {
  return {type: types.VIEW_MODAL_ACTION.OPEN, resourceId:resourceId};
}

export function closeViewModal() {
  return {type: types.VIEW_MODAL_ACTION.CLOSE};
}

export function openEditModal(resourceId){
  return {type: types.EDIT_MODAL_ACTION.OPEN, resourceId:resourceId};
}

export function closeEditModal() {
  return {type: types.EDIT_MODAL_ACTION.CLOSE};
}
