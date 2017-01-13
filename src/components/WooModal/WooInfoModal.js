import React,{PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalAction from '../../actions/wooModalActions';
import WooInfoModalBody from './WooInfoModalBody';
import config from '../../config/config';

class WooInfoModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeModal = this.closeModal.bind(this);
  }
  render() {
    const {resourceId,visible,itemInfo} = this.props;
    return this.renderModal(visible, resourceId, itemInfo);
  }

  closeModal(){
    this.props.dispatch(modalAction.closeModal());
  }
  
  renderModal(isVisible, resourceId, itemInfo){
    const selectedResource = config.resources[resourceId - 1];
    if (!selectedResource) {
      return null;
    }
    const title = selectedResource.view.title;
    return (
          <Modal show={isVisible} onHide={this.closeModal}>
              <Modal.Header closeButton>
                  <Modal.Title>{title} - {itemInfo.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <WooInfoModalBody resourceId={resourceId} resourceItemInfo={itemInfo}/>
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={this.closeModal} bsStyle="primary">Close</Button>
              </Modal.Footer>
          </Modal>
    );
  }
}

WooInfoModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  resourceId: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    let resourceId = state.modal.resourceId;
    let itemInfo = {};
    if (resourceId > -1){
      itemInfo = state.reducer_resources[resourceId - 1].view.item;
    } 
    return {
        visible: state.modal.visible,
        resourceId: resourceId,
        itemInfo: itemInfo
    };
}

export default connect(mapStateToProps)(WooInfoModal);
