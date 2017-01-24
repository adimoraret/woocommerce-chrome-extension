import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {SplitButton, MenuItem} from 'react-bootstrap';
import * as wooActions from '../../actions/wooResourceActions';
import {bindActionCreators} from 'redux';

class WooGridDropDown extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.bindAllMenuItemClickActions();
  }

  bindAllMenuItemClickActions(){
    this.menuItemClickActions = [];
    const {options} = this.props; 
    options.forEach((option) => {
      this.menuItemClickActions[option.id] = this.menuItemClicked.bind(this, option.fieldName); 
    });
  }

  menuItemClicked(fieldName){
    const {resourceId, type} = this.props;
    const pageNumber = 1;
    const newAppliedFilter = {filterType: type, filterValue: fieldName};
    this.props.actions.showLoader(resourceId);
    this.props.actions.loadWooResource(resourceId, pageNumber, newAppliedFilter);
  }

  render(){
    const {type, title, filterId, options, resourceId, appliedFilter} = this.props;
    return (
      <SplitButton bsSize="xsmall" title={<span><i className="fa fa-filter"/>{title}</span>} pullRight bsStyle="warning" id={filterId}>
        {options.map((option) =>
          <MenuItem key={option.id} eventKey={option.id} onClick={this.menuItemClickActions[option.id]}>
            {(appliedFilter.filterValue === option.fieldName) && <i className="fa fa-check"/>}
            {(appliedFilter.filterValue != option.fieldName) && <i className="fa fa-check disabled"/>}
            {option.name}
          </MenuItem>
        )}
    </SplitButton>);
  }
}

WooGridDropDown.propTypes = {
  resourceId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  filterId: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
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


export default connect(mapStateToProps, mapDispatchToProps)(WooGridDropDown);