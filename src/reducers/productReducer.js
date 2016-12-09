import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productReducer(state = initialState.products, action) {
  switch (action.type) {
    case types.LOAD_PRODUCTS.SUCCESS:
      return Object.assign({}, state, {
        rows: action.resource.rows
      })

    default:
      return state;
  }
}
