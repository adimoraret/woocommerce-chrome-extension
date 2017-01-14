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
    
    case "PRODUCT_INFO_SUCCESS": {
       let newState =JSON.parse(JSON.stringify(state))
       newState[0].view.item = action.resource.item;
       newState[0].view.visibleLoader = false;
       return newState;
    }

    case "COUPON_INFO_SUCCESS": {
       let newState =JSON.parse(JSON.stringify(state))
       newState[1].view.item = action.resource.item;
       newState[1].view.visibleLoader = false;
       return newState;
    }

    case "PRODUCT_LIST_LOAD": {
      let newState =JSON.parse(JSON.stringify(state))
      newState[0].list.visibleLoader = true;
      newState[0].list.items = [];
      return newState;
    }

    case "COUPON_LIST_LOAD": {
      let newState =JSON.parse(JSON.stringify(state))
      newState[1].list.visibleLoader = true;
      newState[1].list.items = [];      
      return newState;
    }

    case "PRODUCT_INFO_LOAD": {
      let newState =JSON.parse(JSON.stringify(state))
      newState[0].view.visibleLoader = true;
      newState[0].view.item = {};
      return newState;
    }

    case "COUPON_INFO_LOAD": {
      let newState =JSON.parse(JSON.stringify(state))
      newState[1].view.visibleLoader = true;
      newState[1].view.item = {};      
      return newState;
    }   

    default:
      return state;
  }
}
