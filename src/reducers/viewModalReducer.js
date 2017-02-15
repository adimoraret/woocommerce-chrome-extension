import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function viewModalReducer(state = initialState.modal.view, action) {
  switch (action.type) {
    case types.VIEW_MODAL_ACTION.OPEN:
      return Object.assign({}, state, { 
          visible: true,
          resourceId: action.resourceId
      });
    case types.VIEW_MODAL_ACTION.LOAD:
      return Object.assign({}, state, {
        visible: true,
        resourceId: action.resource.resourceId,
        item: action.resource.item
      });      
    case types.VIEW_MODAL_ACTION.CLOSE:
      return Object.assign({}, state, {
          visible: false,
          resourceId: -1,
          item: {}
      });
    default:
      return state;
  }
}
