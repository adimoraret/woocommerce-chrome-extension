import WooResource from '../WooResource/WooResource';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wooResourceActions from '../../actions/wooResourceActions';

class Coupon extends WooResource {
    constructor(props, context) {
        super(props, context);
    }
}

function mapStateToProps(state, ownProps) {
 return {
    title: state.coupons.title,
    columns: state.coupons.columns,
    rows: state.coupons.rows
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(wooResourceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Coupon);
