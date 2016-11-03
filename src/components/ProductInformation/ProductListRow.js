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
  course: PropTypes.object.isRequired
};

export default ProductListRow;
