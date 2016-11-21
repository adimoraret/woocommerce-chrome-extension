import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as couponActions from '../../actions/couponActions';
import CouponList from './CouponList';


class CouponInformation extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {coupons} = this.props;

        return (
          <article className="col-sm-12 col-md-12 col-lg-6">
            <div className="jarviswidget jarviswidget-color-greenDark jarviswidget-sortable">
              <header role="heading">
                <span className="widget-icon">
                  <i className="fa fa-table"></i>
                </span>                
                <h2>Coupons</h2>                
              </header>
              <div role="content">
                <CouponList coupons={coupons}/>
              </div>
            </div>
          </article>
        );
    }

}


CouponInformation.propTypes = {
  coupons: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    coupons: state.coupons
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(couponActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CouponInformation);