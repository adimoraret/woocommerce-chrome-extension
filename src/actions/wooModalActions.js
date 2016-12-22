import * as types from './actionTypes';

export function openModal() {
  return {type: types.MODAL_ACTION.OPEN};
}

export function closeModal() {
  return {type: types.MODAL_ACTION.CLOSE};
}
