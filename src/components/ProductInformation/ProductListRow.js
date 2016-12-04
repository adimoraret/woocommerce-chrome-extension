import React, {PropTypes} from 'react';

const ProductListRow = ({product}) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>
        <div className="btn-group pull-right margin-10">
          <button className="btn btn-info btn-xs">
            <i className="fa-fw fa fa-info"></i>
          </button>
          <button className="btn btn-primary btn-xs">
            <i className="fa fa-pencil"></i>
          </button>
          <button className="btn btn-danger btn-xs ">
            <i className="fa fa-times"></i>
          </button>      
        </div>
      </td>
    </tr>
  );
};

ProductListRow.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListRow;
