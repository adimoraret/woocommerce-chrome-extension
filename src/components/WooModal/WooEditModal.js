import React,{PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import config from '../../config/config';
import * as modalAction from '../../actions/wooModalActions';
import WooEditModalBody from './WooEditModalBody';
import ItemInfoLoader from '../Common/ItemInfoLoader';
import {isEmptyObject} from '../Common/Helper';

class WooEditModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeEditModal = this.closeEditModal.bind(this);
  }
  
  closeEditModal(){
    this.props.actions.closeEditModal();
  }
  
  render() {
    const {isVisible, resourceId, item} = this.props;
    const selectedResource = config.resources.find(x => x.id === resourceId);
    if (selectedResource == null) {
      return null;
    }
    const title = selectedResource.edit.title;
    return(
      <Modal show={isVisible} onHide={this.closeEditModal} bsSize="large">
          <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             {isEmptyObject(item) && <ItemInfoLoader />}
             {!isEmptyObject(item) && <WooEditModalBody resourceId={resourceId} item={item}/>}
          </Modal.Body>
          <Modal.Footer>
              <Button onClick={this.closeEditModal} bsStyle="warning">Close</Button>
              <Button onClick={this.closeEditModal} bsStyle="primary">Save</Button>              
          </Modal.Footer>
      </Modal>
    );
  }
}

WooEditModal.propTypes = {
  resourceId: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    resourceId: state.modal.edit.resourceId,
    item: state.modal.edit.item,
    isVisible: state.modal.edit.visible
  };
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(modalAction, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(WooEditModal);
