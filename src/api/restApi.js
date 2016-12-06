import * as types from '../actions/actionTypes';
const SITE_URL = 'https://www.codetrest.com';
const AUTHENTICATION_PARAMS = '?consumer_key=ck_d2cd82f86b0852282d360c94ae3e12d66b0bce74&consumer_secret=cs_3025632669cf186f6e6e56884d4e352612540440';

function createColumn(fieldName, displayName, order){
    return {fieldName: fieldName, displayName: displayName, order:order};
}

function getProductsUrl(){
    return `${SITE_URL}${types.LOAD_PRODUCTS.URL}${AUTHENTICATION_PARAMS}`;
}

function getCouponsUrl(){
    return `${SITE_URL}${types.LOAD_COUPONS.URL}${AUTHENTICATION_PARAMS}`;
}

function getProductsColumns(){
    return [
        createColumn("id", "Id", 1),
        createColumn("name", "Name", 2),
        createColumn("permalink", "Link", 3),
        createColumn("price", "Price", 4)        
    ];
}

function getCouponsColumns(){
    return [
        createColumn("id", "Id", 1),
        createColumn("code", "Code", 2),
        createColumn("date_created", "Created Date", 3),
        createColumn("amount", "Amount", 4)        
    ];
}

export function getWooResourceUrl(resourceType){
    switch (resourceType) {
        case types.LOAD_PRODUCTS:
            return getProductsUrl();
        case types.LOAD_COUPONS:
            return getCouponsUrl();
        default:
            return "/error";
    }
}

export function getResourceColumns(resourceType){
    switch (resourceType) {
        case types.LOAD_PRODUCTS.NAME:
            return getProductsColumns();
        case types.LOAD_COUPONS.NAME:
            return getCouponsColumns();
        default:
            return [createColumn("err", "Error", 1)];
    }
}
