import React from 'react';
import {FormGroup, FormControl, InputGroup} from 'react-bootstrap';

class WooSearch extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render(){
    return (
      <FormGroup bsSize="small">
        <FormControl type="text" placeholder="Search..." />
      </FormGroup>
    );
  }
};

export default WooSearch;