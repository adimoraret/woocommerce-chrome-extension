import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Pagination} from 'react-bootstrap';
import config from '../../config/config.js';
import {getNumberOfPages} from '../Common/PageCalculation';

const WooGridPagination = React.createClass({
  getInitialState() {
    return {
      activePage: 1
    };
  },

  handleSelect(eventKey) {
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
        items={numberOfPages}
        maxButtons={maxButtons}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
    );
  }
});

WooGridPagination.propTypes = {
  numberOfItems: PropTypes.number.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
      numberOfItems: ownProps.numberOfItems
    };
}

export default connect(mapStateToProps)(WooGridPagination);