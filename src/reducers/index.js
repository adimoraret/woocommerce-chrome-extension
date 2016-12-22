import {combineReducers} from 'redux';
import products from './productReducer';
import coupons from './couponReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import modal from './modalReducer';

const rootReducer = combineReducers({
  products,
  coupons,
  ajaxCallsInProgress,
  modal
});

export default rootReducer;