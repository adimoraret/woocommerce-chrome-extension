import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wooResourceActions from '../../actions/wooResourceActions';
import WooResourceList from './WooResourceList';
import * as types from '../../actions/actionTypes'

class WooResouce extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

render() {
    const {title,columns,rows} = this.props;
    return (
      <article className="col-sm-12 col-md-12 col-lg-6">
        <div className="jarviswidget jarviswidget-color-greenLight jarviswidget-sortable">
          <header role="heading">
            <span className="widget-icon">
              <i className="fa fa-table"></i>
            </span>                
            <h2>{title}</h2>                
          </header>
          <div role="content">
            <WooResourceList columns={columns} rows={rows}/>
          </div>
        </div>
      </article>      
    );
  }

}

WooResouce.propTypes = {
  ResourceType: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
 switch (ownProps.ResourceType) {
   case types.LOAD_PRODUCTS.NAME:
      return getProducts(state);
   case types.LOAD_COUPONS.NAME:
      return getCoupons(state); 
   default:
      return {};
  }
}

function getProducts(state){
  return {
    title: state.products.title,
    columns: state.products.columns,
    rows: state.products.rows
  };
}

function getCoupons(state){
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

export default connect(mapStateToProps, mapDispatchToProps)(WooResouce);
