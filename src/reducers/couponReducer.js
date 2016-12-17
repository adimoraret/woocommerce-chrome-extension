import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function couponReducer(state = initialState.coupons, action) {
  switch (action.type) {
    case types.COUPON_ACTION.BULK.LOAD.SUCCESS:
      return Object.assign({}, state, {
        rows: action.resource.rows,
        visibleLoader: action.resource.visibleLoader
      })
    default:
      return state;
  }
}
