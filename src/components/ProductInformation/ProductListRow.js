import React, {PropTypes} from 'react';

const ProductListRow = ({product}) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
    </tr>
  );
};

ProductListRow.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListRow;
