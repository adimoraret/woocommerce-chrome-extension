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
    if (visible) {
        return this.renderModal(resourceId, itemInfo);
    }
    return null;
  }

  closeModal(){
    this.props.dispatch(modalAction.closeModal());
  }
  
  renderModal(resourceId, itemInfo){
    const selectedResource = config.resources[resourceId - 1];
    const title = selectedResource.view.title;
    return (
        <div className="static-modal">
            <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>{title} - {itemInfo.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <WooInfoModalBody resourceId={resourceId}/>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={this.closeModal}>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>

            </Modal.Dialog>
        </div>
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
