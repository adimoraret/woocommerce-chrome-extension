import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function modalReducer(state = initialState.modal, action) {
  switch (action.type) {
    case types.VIEW_MODAL_ACTION.OPEN:
      return Object.assign({}, state, { 
          visible: true,
          resourceId: action.resourceId
      });
    case types.VIEW_MODAL_ACTION.CLOSE:
      return Object.assign({}, state, {
          visible: false,
          resourceId: -1
      });
    default:
      return state;
  }
}
