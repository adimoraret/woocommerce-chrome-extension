import * as types from '../actions/actionTypes';
const SITE_URL = 'https://www.codetrest.com';
const AUTHENTICATION_PARAMS = '?consumer_key=ck_d2cd82f86b0852282d360c94ae3e12d66b0bce74&consumer_secret=cs_3025632669cf186f6e6e56884d4e352612540440';

function getProductsUrl(){
    return `${SITE_URL}${types.LOAD_PRODUCTS.URL}${AUTHENTICATION_PARAMS}`;
}

function getCouponsUrl(){
    return `${SITE_URL}${types.LOAD_COUPONS.URL}${AUTHENTICATION_PARAMS}`;
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