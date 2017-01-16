import React, {PropTypes} from 'react';
import {SplitButton, MenuItem} from 'react-bootstrap';

class WooGridDropDown extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {title,id} = this.props;
    return (
      <SplitButton bsSize="xsmall" title={title} pullRight bsStyle="warning" id={id}>
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
    </SplitButton>);
  }
};

WooGridDropDown.propTypes = {
  title: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
      title: ownProps.title
    };
}

export default WooGridDropDown;