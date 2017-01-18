import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {SplitButton, MenuItem} from 'react-bootstrap';
import * as wooActions from '../../actions/wooResourceActions';

class WooGridDropDown extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.changeFilter = this.changeFilter.bind(this);
  }

  changeFilter(filterType, filterValue){
    const pageNumber = 1;
    this.props.dispatch(wooActions.loadWooResource(resource.Id, pageNumber, filterType, filterValue));
  }

  render(){
    const {type, title, id, options} = this.props;
    return (
      <SplitButton bsSize="xsmall" title={title} pullRight bsStyle="warning" id={id}>
        {options.map((option) =>
          <MenuItem key={option.id} eventKey={option.id} onClick={() => this.changeFilter(type, option.fieldName)}>{option.name}</MenuItem>
        )}
    </SplitButton>);
  }
};

WooGridDropDown.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
    };
}

export default connect(mapStateToProps)(WooGridDropDown);