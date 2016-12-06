import {getResourceColumns} from '../api/restApi';
import * as types from '../actions/actionTypes';

export default {
  products: 
  {
    title: "Products",
    columns:getResourceColumns(types.LOAD_PRODUCTS.NAME),
    rows:[] 
  },
  coupons:   {
    title: "Coupons",
    columns:getResourceColumns(types.LOAD_COUPONS.NAME),
    rows:[]
  },
  ajaxCallsInProgress: 0
};
