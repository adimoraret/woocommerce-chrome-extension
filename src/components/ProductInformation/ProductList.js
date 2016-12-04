import React, {PropTypes} from 'react';
import ProductListRow from './ProductListRow';

const ProductList = ({products}) => {
  return (
    <div className="widget-body no-padding">
      <div className="alert alert-info no-margin fade in">
        <i className="fa-fw fa fa-info"></i>Adds zebra-striping to table row within <code>&lt;table&gt;</code> by adding the <code>.table-striped</code> with the base class
			</div>    
      <div className="table-responsive">    
        <table className="table table-hover">
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          {products.map(product =>
            <ProductListRow key={product.id} product={product}/>
          )}
          </tbody>
        </table>
      </div>
    </div>        
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
