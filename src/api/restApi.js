const SITE_URL = 'https://www.codetrest.com';
const LOAD_PRODUCTS_URL = '/wp-json/wc/v1/products';
const LOAD_COUPONS_URL = '/wp-json/wc/v1/coupons';
const AUTHENTICATION_PARAMS = '?consumer_key=ck_d2cd82f86b0852282d360c94ae3e12d66b0bce74&consumer_secret=cs_3025632669cf186f6e6e56884d4e352612540440';

export function getProductsUrl(){
    return `${SITE_URL}${LOAD_PRODUCTS_URL}${AUTHENTICATION_PARAMS}`;
}
export function getCouponsUrl(){
    return `${SITE_URL}${LOAD_COUPONS_URL}${AUTHENTICATION_PARAMS}`;
}