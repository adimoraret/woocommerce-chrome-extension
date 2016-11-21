import React, {PropTypes} from 'react';
import CouponListRow from './CouponListRow';

const CouponList = ({coupons}) => {
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
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map(coupon =>
              <CouponListRow key={coupon.id} coupon={coupon}/>
            )}
          </tbody>
        </table>

      </div>
    </div>
    
  );
};

CouponList.propTypes = {
  coupons: PropTypes.array.isRequired
};

export default CouponList;
