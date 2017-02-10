import React,{PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import config from '../../config/config';
import * as modalAction from '../../actions/wooModalActions';

class WooEditModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeEditModal = this.closeEditModal.bind(this);
  }
  
  closeEditModal(){
    this.props.actions.closeEditModal();
  }
  
  render() {
    const {isVisible, resourceId} = this.props;
    const selectedResource = config.resources.find(x => x.id === resourceId);
    if (selectedResource == null) {
      return null;
    }
    const title = selectedResource.edit.title;
    return(
      <Modal show={isVisible} onHide={this.closeEditModal}>
          <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>TODO</div>
             {/*<WooInfoModalBody resourceId={resourceId} resourceItemInfo={itemInfo} />*/} 
          </Modal.Body>
          <Modal.Footer>
              <Button onClick={this.closeEditModal} bsStyle="primary">Close</Button>
          </Modal.Footer>
      </Modal>
    );
  }
}

WooEditModal.propTypes = {
  resourceId: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    resourceId: state.modal.edit.resourceId,
    isVisible: state.modal.edit.visible
  };
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(modalAction, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(WooEditModal);
