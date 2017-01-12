import * as types from '../actions/actionTypes';
import initialState from './initialState';
import config from '../config/config';

export default function resourceReducer(state = initialState.resources, action) {
  switch (action.type) {
    case "PRODUCT_LIST_SUCCESS": {
      let newState =JSON.parse(JSON.stringify(state))
      newState[0].list.items = action.resource.rows;
      newState[0].list.visibleLoader = false;
      return newState;
    }

    case "COUPON_LIST_SUCCESS": {
      let newState = JSON.parse(JSON.stringify(state))
      newState[1].list.items = action.resource.rows;
      newState[1].list.visibleLoader = false;
      return newState;
    }

    default:
      return state;
  }
}
