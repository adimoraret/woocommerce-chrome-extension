export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';
export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR';

export const PRODUCT_ACTION = {
    BULK: {
        LOAD: {
            NAME: "LOAD_PRODUCTS",
            URL: "/wp-json/wc/v1/products",
            SUCCESS: "LOAD_PRODUCTS_SUCCESS",
            FAIL: "LOAD_PRODUCTS_FAIL"
        }
    },
    SINGLE: {
        VIEW: {
            NAME: "VIEW_PRODUCT",
            URL: "",
            SUCCESS: "VIEW_PRODUCT_SUCCESS",
            FAIL: "VIEW_PRODUCT_FAIL"
        },
        EDIT: {
            NAME: "EDIT_PRODUCT",
            URL: "",
            SUCCESS: "EDIT_PRODUCT_SUCCESS",
            FAIL: "EDIT_PRODUCT_FAIL"            
        } 
    }
}

export const COUPON_ACTION = {
    BULK: {
        LOAD: {
            NAME: "LOAD_COUPONS",
            URL: "/wp-json/wc/v1/coupons",
            SUCCESS: "LOAD_COUPONS_SUCCESS",
            FAIL: "LOAD_COUPONS_FAIL"
        }
    },
    SINGLE: {
        VIEW: {
            NAME: "VIEW_COUPON",
            URL: "",
            SUCCESS: "VIEW_COUPON_SUCCESS",
            FAIL: "VIEW_COUPON_FAIL"
        },
        EDIT: {
            NAME: "EDIT_COUPON",
            URL: "",
            SUCCESS: "EDIT_COUPON_SUCCESS",
            FAIL: "EDIT_COUPON_FAIL"            
        } 
    }
};