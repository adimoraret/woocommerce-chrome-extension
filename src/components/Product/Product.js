import WooResource from '../WooResource/WooResource';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wooResourceActions from '../../actions/wooResourceActions';

class Product extends WooResource {
    constructor(props, context) {
        super(props, context);
    }
}

function mapStateToProps(state, ownProps) {
 return {
    title: state.products.title,
    columns: state.products.columns,
    rows: state.products.rows,
    visibleLoader: state.products.visibleLoader
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(wooResourceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
