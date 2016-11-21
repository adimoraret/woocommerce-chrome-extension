import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';
import ProductList from './ProductList';

class ProductInformation extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

render() {
    const {products} = this.props;

    return (
      <article className="col-sm-12 col-md-12 col-lg-6">
        <div className="jarviswidget jarviswidget-color-greenLight jarviswidget-sortable">
          <header role="heading">
            <span className="widget-icon">
              <i className="fa fa-table"></i>
            </span>                
            <h2>Products</h2>                
          </header>
          <div role="content">
            <ProductList products={products}/>
          </div>
        </div>
      </article>      
    );
  }

}

ProductInformation.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInformation);
