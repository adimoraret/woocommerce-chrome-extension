import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function couponReducer(state = initialState.coupons, action) {
  switch (action.type) {
    case types.LOAD_COUPONS_SUCCESS:
      return action.coupons;

    default:
      return state;
  }
}
