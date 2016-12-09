import {getResourceColumns} from '../api/restApi';
import * as types from '../actions/actionTypes';
import {createColumn} from '../components/Common/Resource';

function getProductsColumns(){
    return [
        createColumn("id", "Id", 1),
        createColumn("name", "Name", 2),
        createColumn("permalink", "Link", 3),
        createColumn("price", "Price", 4)        
    ];
};

function getCouponsColumns(){
    return [
        createColumn("id", "Id", 1),
        createColumn("code", "Code", 2),
        createColumn("date_created", "Created Date", 3),
        createColumn("amount", "Amount", 4)        
    ];
}

export default {
  products: 
  {
    title: "Products",
    columns: getProductsColumns(),
    rows:[] 
  },
  coupons:   {
    title: "Coupons",
    columns: getCouponsColumns(),
    rows:[]
  },
  ajaxCallsInProgress: 0
};
