import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Pagination} from 'react-bootstrap';
import config from '../../config/config.js';
import {getNumberOfPages} from '../Common/PageCalculation';
import * as wooActions from '../../actions/wooResourceActions';

const WooGridPagination = React.createClass({
  getInitialState() {
    const {currentPage} = this.props;
    return {
      activePage: currentPage
    };
  },

  handleSelect(eventKey) {
    const {resourceId, appliedFilter} = this.props;
    this.props.dispatch(wooActions.showLoader(resourceId));
    this.props.dispatch(wooActions.loadWooResource(resourceId, eventKey, appliedFilter));
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
  resourceId: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
    };
}

export default connect(mapStateToProps)(WooGridPagination);