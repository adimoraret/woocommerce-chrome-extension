import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productReducer(state = initialState.products, action) {
  switch (action.type) {
    case types.PRODUCT_ACTION.BULK.LOAD.SUCCESS:
      return Object.assign({}, state, {
        rows: action.resource.rows,
        visibleLoader: action.resource.visibleLoader
      })

    default:
      return state;
  }
}
