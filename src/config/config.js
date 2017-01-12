import {createColumn} from '../components/Common/Resource';

function getProductsGridColumns(){
    return [
        createColumn("id", "Id", null, null, 1),
        createColumn("name", "Name", "permalink", "description", 2),
        createColumn("price", "Price", null, null, 3)        
    ];
};
function getCouponsGridColumns(){
    return [
        createColumn("id", "Id", null, null, 1),
        createColumn("code", "Code", null, null, 2),
        createColumn("date_created", "Created Date", null, null, 3),
        createColumn("amount", "Amount", null, null, 4)        
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
          url: "/wp-json/wc/v1/products/:id"
        },
        delete: {
          title: "Delete this product:",
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
        title: "Delete this coupon:",
        url: ""
      }
    }  
  ]
};