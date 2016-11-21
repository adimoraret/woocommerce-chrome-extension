import {combineReducers} from 'redux';
import products from './productReducer';
import coupons from './couponReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  products,
  coupons,
  ajaxCallsInProgress
});

export default rootReducer;