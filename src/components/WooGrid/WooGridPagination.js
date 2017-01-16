import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Pagination} from 'react-bootstrap';
import config from '../../config/config.js';
import {getNumberOfPages} from '../Common/PageCalculation';
import * as wooActions from '../../actions/wooResourceActions';

const WooGridPagination = React.createClass({
  getInitialState() {
    const {resource} = this.props;
    return {
      activePage: resource.list.page
    };
  },

  handleSelect(eventKey) {
    const {resource} = this.props;
    this.props.dispatch(wooActions.showLoader(resource));
    this.props.dispatch(wooActions.loadWooResource(resource, eventKey));
    this.setState({
      activePage: eventKey
    });
  },

  render() {
    const {numberOfItems} = this.props;
    const {itemsPerPage,maxButtons} = config.grid.pagination;
    const numberOfPages = getNumberOfPages(numberOfItems, itemsPerPage);
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        bsClass='pagination no-margin'
        items={numberOfPages}
        maxButtons={maxButtons}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
    );
  }
});

WooGridPagination.propTypes = {
  numberOfItems: PropTypes.number.isRequired,
  resource: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
      numberOfItems: ownProps.numberOfItems,
      resource: ownProps.resource
    };
}

export default connect(mapStateToProps)(WooGridPagination);