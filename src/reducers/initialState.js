import {getResourceColumns} from '../api/restApi';
import * as types from '../actions/actionTypes';

export default {
  products: 
  {
    title: "My title 1",
    columns:getResourceColumns(types.LOAD_PRODUCTS_SUCCESS),
    rows:[] 
  },
  coupons:   {
    title: "My title 2",
    columns:["a", "b", "c"],
    rows:[]
  },
  ajaxCallsInProgress: 0
};
