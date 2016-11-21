import React, {PropTypes} from 'react';

const CouponListRow = ({coupon}) => {
  return (
    <tr>
      <td>{coupon.id}</td>
      <td>{coupon.description}</td>
      <td>{coupon.amount}</td>
    </tr>
  );
};

CouponListRow.propTypes = {
  coupon: PropTypes.object.isRequired
};

export default CouponListRow;
