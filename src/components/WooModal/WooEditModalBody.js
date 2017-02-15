import React,{PropTypes} from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Grid, Row, Col, Image} from 'react-bootstrap';
import config from '../../config/config';

class WooEditModalBody extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {resourceId, item} = this.props;
    const resourceConfig = config.resources.find(x=>x.id === resourceId);
    const images = item[resourceConfig.edit.images_property];
    const properties = resourceConfig.edit.visible_properties;
    return(
          <Grid bsClass={""}>
            <Row>
              <Col md={5}>
                {images && <Image src={images[0].src} rounded responsive />}
                {!images && <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_WtsN-3zxLyT-0MOqyLAvZxip6WuYJQTEeKcfBtUFCJv9H4lS" rounded/>}
              </Col>
              <Col md={7}>
               <Form horizontal>
                  {properties.map(property =>
                    <FormGroup key={property.fieldName} controlId={property.fieldName}>
                      <Col md={12}>
                        <ControlLabel>{property.displayName}</ControlLabel>
                        <FormControl placeholder={item[property.fieldName]}  />
                      </Col>
                    </FormGroup>
                  )}
                </Form>
              </Col>
            </Row>
          </Grid>);
 
  }
}

WooEditModalBody.propTypes = {
  resourceId: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired
};


export default WooEditModalBody;