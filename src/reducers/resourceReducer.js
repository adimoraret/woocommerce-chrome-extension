import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function resourceReducer(state = initialState.resources, action) {
  switch (action.type) {
    case types.PRODUCT_ACTION.BULK.LOAD.SUCCESS: {
      let productList = Object.assign({}, state[0].list, {
          items: action.resource.rows,
          visibleLoader: false
        }
      );
      let newState = [];
      newState[0] = Object.assign({}, state[0]);
      newState[1] = Object.assign({}, state[1]);
      newState[0].list = productList;
      return newState;
    }

    case types.COUPON_ACTION.BULK.LOAD.SUCCESS: {
      let couponList = Object.assign({}, state[1].list, {
          items: action.resource.rows,
          visibleLoader: false
        }
      );
      let newState = [];
      newState[0] = Object.assign({}, state[0]);
      newState[1] = Object.assign({}, state[1]);    
      newState[1].list = couponList;
      return newState;
    }

    default:
      return state;
  }
}
