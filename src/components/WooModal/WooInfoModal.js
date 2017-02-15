import React,{PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalAction from '../../actions/wooModalActions';
import WooInfoModalBody from './WooInfoModalBody';
import config from '../../config/config';
import ItemInfoLoader from '../Common/ItemInfoLoader';
import {isEmptyObject} from '../Common/Helper';

class WooInfoModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeViewModal = this.closeViewModal.bind(this);
  }
  
  closeViewModal(){
    this.props.actions.closeViewModal();
  }
  
  render() {
    const {isVisible, resourceId, item} = this.props;
    const selectedResource = config.resources.find(x => x.id === resourceId);
    if (!selectedResource) {
      return null;
    }
    const title = selectedResource.view.title;
    return (
          <Modal show={isVisible} onHide={this.closeViewModal}>
              <Modal.Header closeButton>
                  <Modal.Title>{title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {isEmptyObject(item) && <ItemInfoLoader/>}
                  {!isEmptyObject(item) && <WooInfoModalBody resourceId={resourceId} item={item} />}
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={this.closeViewModal} bsStyle="warning">Close</Button>
              </Modal.Footer>
          </Modal>
    );
  }
}

WooInfoModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  resourceId: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        resourceId: state.modal.view.resourceId,
        item: state.modal.view.item,
        isVisible: state.modal.view.visible      
    };
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(modalAction, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(WooInfoModal);
