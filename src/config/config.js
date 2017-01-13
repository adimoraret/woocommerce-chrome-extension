import {createPropertyObject} from '../components/Common/Resource';

function getProductsGridColumns(){
    return [
        createPropertyObject("id", "Id", null, null, 1),
        createPropertyObject("name", "Name", "permalink", "description", 2),
        createPropertyObject("price", "Price", null, null, 3)        
    ];
};
function getCouponsGridColumns(){
    return [
        createPropertyObject("id", "Id", null, null, 1),
        createPropertyObject("code", "Code", null, null, 2),
        createPropertyObject("date_created", "Created Date", null, null, 3),
        createPropertyObject("amount", "Amount", null, null, 4)        
    ];
}
function getProductInfoProperties(){
    return [
        createPropertyObject("id", "Id", null, null, 1),
        createPropertyObject("name", "Name", "permalink", "description", 2),
        createPropertyObject("price", "Price", null, null, 3)        
    ];
}

export default {
    resources : [
      {
        id: 1,
        name: "PRODUCT",
        list: {
          title: "Products",
          visible_properties: getProductsGridColumns(),
          url: "/wp-json/wc/v1/products"
        },
        view: {
          title: "View product",
          url: "/wp-json/wc/v1/products/:id",
          visible_properties: getProductInfoProperties(),
        },
        delete: {
          title: "Delete this product",
          url: ""
        }
    },
    {
      id: 2,
      name: "COUPON",      
      list: {
        title: "Coupons",
        visible_properties: getCouponsGridColumns(),
        url: "/wp-json/wc/v1/coupons"
      },
      add: {
        title: "Add new coupon",
        url: ""
      },
      edit: {
        title: "Edit coupon",
        url: ""
      },
      view: {
        title: "View coupon",
        url: ""
      },
      delete: {
        title: "Delete this coupon",
        url: ""
      }
    }  
  ]
};