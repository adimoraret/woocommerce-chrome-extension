import React,{PropTypes} from 'react';
import {Form, FormGroup, Col, ControlLabel, FormControl} from 'react-bootstrap';
import config from '../../config/config';

class WooInfoModalBody extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {resourceItemInfo, resourceId} = this.props;
    const resourceConfig = config.resources.find(x=>x.id === resourceId);
    const properties = resourceConfig.view.visible_properties;
    return(
          <Form horizontal>
            {properties.map(property =>
              <FormGroup key={property.fieldName} controlId={property.fieldName}>
                <Col componentClass={ControlLabel} sm={2}>
                  {property.displayName}
                </Col>
                <Col sm={10}>
                  <FormControl placeholder={resourceItemInfo[property.fieldName]} readOnly />
                </Col>
              </FormGroup>
            )}
          </Form>      
    );
  }
}

WooInfoModalBody.propTypes = {
  resourceId: PropTypes.number.isRequired,
  resourceItemInfo: PropTypes.object.isRequired
};


export default WooInfoModalBody;