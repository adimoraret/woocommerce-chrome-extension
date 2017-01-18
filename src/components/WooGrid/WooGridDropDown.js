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
    this.props.dispatch(wooActions.showLoader(resourceId));
    this.props.dispatch(wooActions.loadWooResource(resourceId, pageNumber, filterType, filterValue));
  }



  render(){
    const {type, title, filterId, options, resourceId, selectedFilterValue} = this.props;
    return (
      <SplitButton bsSize="xsmall" title={<span><i className="fa fa-filter"></i>{title}</span>} pullRight bsStyle="warning" id={filterId}>
        {options.map((option) =>
          <MenuItem key={option.id} eventKey={option.id} onClick={() => this.changeFilter(resourceId, type, option.fieldName)}>
            {(selectedFilterValue === option.fieldName) && <i className="fa fa-check "></i>}
            {(selectedFilterValue != option.fieldName) && <i className="fa fa-check disabled"></i>}
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
  options: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
    };
}

export default connect(mapStateToProps)(WooGridDropDown);