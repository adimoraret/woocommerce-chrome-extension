import {createPropertyObject} from '../components/Common/Resource';

function getProductsGridColumns(){
    return [
        createPropertyObject("id", "Id", null, null, 1),
        createPropertyObject("name", "Name", "permalink", "description", 2),
        createPropertyObject("price", "Price", null, null, 3)        
    ];
}
function getCouponsGridColumns(){
    return [
        createPropertyObject("id", "Id", null, null, 1),
        createPropertyObject("code", "Code", null, null, 2),
        createPropertyObject("date_created", "Created Date", null, null, 3),
        createPropertyObject("amount", "Amount", null, null, 4)        
    ];
}
function getProductCategoryGridColumns(){
    return [
        createPropertyObject("id", "Id", null, null, 1),
        createPropertyObject("name", "Name", null, null, 2),
        createPropertyObject("slug", "Slug", null, null, 3),
        createPropertyObject("parent", "Parent", null, null, 4)        
    ];
}
function getProductInfoProperties(){
    return [
        createPropertyObject("id", "Id", null, null, 1),
        createPropertyObject("name", "Name", "permalink", "description", 2),
        createPropertyObject("short_description", "Short Description", null, null, 3),
        createPropertyObject("description", "Description", null, null, 4),
        createPropertyObject("sale_price", "Sale Price", null, null, 5),
        createPropertyObject("price", "Price", null, null, 6),
        createPropertyObject("stock_quantity", "Stock Quantity", null, null, 7),
    ];
}
function getCouponInfoProperties(){
    return [
        createPropertyObject("id", "Id", null, null, 1),
        createPropertyObject("code", "Code", null, null, 2),
        createPropertyObject("description", "Description", null, null, 3),
        createPropertyObject("amount", "Amount", null, null, 4),
        createPropertyObject("expiry_date", "Expiration Date", null, null, 5),
    ];
}
function getProductCategoryInfoProperties(){
    return [
        createPropertyObject("id", "Id", null, null, 1),
        createPropertyObject("name", "Name", null, null, 2),
        createPropertyObject("slug", "Slug", null, null, 3),
        createPropertyObject("description", "Description", null, null, 3),
        createPropertyObject("parent", "Parent", null, null, 4)  
    ];
}
function getProductEditProperties(){
  return getProductInfoProperties();
}

export default {
    resources : [
      {
        id: 1,
        order: 1,
        name: "PRODUCT",
        list: {
          title: "Products",
          visible_properties: getProductsGridColumns(),
          url: "/wp-json/wc/v1/products",
          filter: [
            {id: 1, name: 'Status', fieldName: 'status', 
              options:[
                {id: 1, name: 'Any', fieldName: 'any' },
                {id: 2, name: 'Draft', fieldName: 'draft' },
                {id: 3, name: 'Pending', fieldName:'pending'},
                {id: 4, name: 'Private', fieldName: 'private'},
                {id: 5, name: 'Publish', fieldName: 'publish' }
              ]
            }
          ]
        },
        view: {
          title: "View product",
          url: "/wp-json/wc/v1/products/:id",
          visible_properties: getProductInfoProperties(),
        },
        edit: {
          title: "Edit product",
          url: "/wp-json/wc/v1/products/:id",
          visible_properties: getProductEditProperties(),
          images_property: 'images'
        },
        delete: {
          title: "Delete this product",
          url: ""
        }
    },
    {
      id: 2,
      name: "COUPON",
      order: 3,
      list: {
        title: "Coupons",
        visible_properties: getCouponsGridColumns(),
        url: "/wp-json/wc/v1/coupons"
      },
      view: {
        title: "View coupon",
        url: "/wp-json/wc/v1/coupons/:id",
        visible_properties: getCouponInfoProperties(),
      },
      edit: {
        title: "Edit Coupon"
      },      
      delete: {
        title: "Delete this coupon",
        url: ""
      }
    },
    {
      id: 3,
      name: "PRODUCT_CATEGORY",
      order: 2,     
      list: {
        title: "Product Categories",
        visible_properties: getProductCategoryGridColumns(),
        url: "/wp-json/wc/v1/products/categories"
      },
      view: {
        title: "View Product Category",
        url: "/wp-json/wc/v1/products/categories/:id",
        visible_properties:getProductCategoryInfoProperties(),
      },
      edit: {
        title: "Edit Product Category"
      },      
      delete: {
        title: "Delete this Product Category",
        url: ""
      }      
    }
  ],
  grid:{
    pagination:{
        itemsPerPage:2,
        maxButtons:5
      },
    titleBacgroundColor: ['jarviswidget-color-redLight', 'jarviswidget-color-teal', 'jarviswidget-color-blue'],
    icon:['fa-cube', 'fa-tags', 'fa-cubes']
  }
};