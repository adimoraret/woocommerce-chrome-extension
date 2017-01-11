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
    const {resourceId,visible} = this.props;
    if (visible) {
        return this.renderModal(resourceId);
    }
    return null;
  }

  closeModal(){
    this.props.dispatch(modalAction.closeModal());
  }
  
  renderModal(resourceId){
    const title = config.resources[resourceId-1].view.title;
    return (
        <div className="static-modal">
            <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
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
    return {
        visible: state.modal.visible,
        resourceId: state.modal.resourceId
    };
}

export default connect(mapStateToProps)(WooInfoModal);
