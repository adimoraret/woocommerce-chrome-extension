import * as types from './actionTypes';

export function openModal(title) {
  return {type: types.MODAL_ACTION.OPEN, title:title};
}

export function closeModal(action) {
  return {type: types.MODAL_ACTION.CLOSE};
}
