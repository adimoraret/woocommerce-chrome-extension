export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';
export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR';

export const PRODUCT_ACTION = {
    BULK: {
        LOAD: {
            NAME: "LOAD_PRODUCTS",
            SUCCESS: "LOAD_PRODUCTS_SUCCESS",
            FAIL: "LOAD_PRODUCTS_FAIL"
        }
    },
    SINGLE: {
        VIEW: {
            NAME: "VIEW_PRODUCT",
            SUCCESS: "VIEW_PRODUCT_SUCCESS",
            FAIL: "VIEW_PRODUCT_FAIL"
        },
    }
};

export const COUPON_ACTION = {
    BULK: {
        LOAD: {
            NAME: "LOAD_COUPONS",
            SUCCESS: "LOAD_COUPONS_SUCCESS",
            FAIL: "LOAD_COUPONS_FAIL"
        }
    },
    SINGLE: {
        VIEW: {
            NAME: "VIEW_COUPON",
            SUCCESS: "VIEW_COUPON_SUCCESS",
            FAIL: "VIEW_COUPON_FAIL"
        },
        EDIT: {
            NAME: "EDIT_COUPON",
            SUCCESS: "EDIT_COUPON_SUCCESS",
            FAIL: "EDIT_COUPON_FAIL"            
        } 
    }
};

export const MODAL_ACTION = {
    OPEN: "OPEN_MODAL",
    CLOSE: "CLOSE_MODAL"
};