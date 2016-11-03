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
      <div>
        <h1>Products</h1>
        <ProductList products={products}/>
      </div>
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
