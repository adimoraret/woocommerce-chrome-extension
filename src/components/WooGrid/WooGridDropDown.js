import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {SplitButton, MenuItem} from 'react-bootstrap';
import * as wooActions from '../../actions/wooResourceActions';

class WooGridDropDown extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.changeFilter = this.changeFilter.bind(this);
  }

  changeFilter(resourceId, filterType, filterValue){
    const pageNumber = 1;
    const appliedFilter = {filterType: filterType, filterValue: filterValue}
    this.props.dispatch(wooActions.showLoader(resourceId));
    this.props.dispatch(wooActions.loadWooResource(resourceId, pageNumber, appliedFilter));
  }

  render(){
    const {type, title, filterId, options, resourceId, appliedFilter} = this.props;
    return (
      <SplitButton bsSize="xsmall" title={<span><i className="fa fa-filter"></i>{title}</span>} pullRight bsStyle="warning" id={filterId}>
        {options.map((option) =>
          <MenuItem key={option.id} eventKey={option.id} onClick={() => this.changeFilter(resourceId, type, option.fieldName)}>
            {(appliedFilter.filterValue === option.fieldName) && <i className="fa fa-check "></i>}
            {(appliedFilter.filterValue != option.fieldName) && <i className="fa fa-check disabled"></i>}
            {option.name}
          </MenuItem>
        )}
    </SplitButton>);
  }
};

WooGridDropDown.propTypes = {
  resourceId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  filterId: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
  appliedFilter: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
    };
}

export default connect(mapStateToProps)(WooGridDropDown);