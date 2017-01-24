import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Pagination} from 'react-bootstrap';
import config from '../../config/config.js';
import {getNumberOfPages} from '../Common/PageCalculation';
import * as wooActions from '../../actions/wooResourceActions';
import {bindActionCreators} from 'redux';

class WooGridPagination extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activePage: props.currentPage
    };
  }

  handleSelect(eventKey) {
    const {resourceId, appliedFilter} = this.props;
    this.props.actions.showLoader(resourceId);
    this.props.actions.loadWooResource(resourceId, eventKey, appliedFilter);
    this.setState({
      activePage: eventKey
    });
  }

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
        bsClass="pagination no-margin"
        items={numberOfPages}
        maxButtons={maxButtons}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
    );
  }
}

WooGridPagination.propTypes = {
  numberOfItems: PropTypes.number.isRequired,
  resourceId: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  appliedFilter: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(wooActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WooGridPagination);