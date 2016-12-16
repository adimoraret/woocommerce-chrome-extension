import {getResourceColumns} from '../api/restApi';
import * as types from '../actions/actionTypes';
import {createColumn} from '../components/Common/Resource';

function getProductsColumns(){
    return [
        createColumn("id", "Id", null, null, 1),
        createColumn("name", "Name", "permalink", "description", 2),
        createColumn("price", "Price", null, null, 3)        
    ];
};

function getCouponsColumns(){
    return [
        createColumn("id", "Id", null, null, 1),
        createColumn("code", "Code", null, null, 2),
        createColumn("date_created", "Created Date", null, null, 3),
        createColumn("amount", "Amount", null, null, 4)        
    ];
}

export default {
  products: 
  {
    title: "Products",
    columns: getProductsColumns(),
    rows:[],
    visibleLoader: true
  },
  coupons:   {
    title: "Coupons",
    columns: getCouponsColumns(),
    rows:[],
    visibleLoader: true
  },
  ajaxCallsInProgress: 0
};
