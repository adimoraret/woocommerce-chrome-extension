import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function editModalReducer(state = initialState.modal.edit, action) {
  switch (action.type) {
    case types.EDIT_MODAL_ACTION.OPEN:
      return Object.assign({}, state, { 
          visible: true,
          resourceId: action.resourceId
      });
    case types.EDIT_MODAL_ACTION.CLOSE:{
     console.log("Closing");
      return Object.assign({}, state, {
          visible: false,
          resourceId: -1
      });
    }
    default:
      return state;
  }
}
