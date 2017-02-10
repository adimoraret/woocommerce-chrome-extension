import React,{PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalAction from '../../actions/wooModalActions';
import WooInfoModalBody from './WooInfoModalBody';
import config from '../../config/config';
import ItemInfoLoader from '../Common/ItemInfoLoader';

class WooInfoModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeViewModal = this.closeViewModal.bind(this);
  }
  
  closeViewModal(){
    this.props.actions.closeViewModal();
  }
  
  renderModal(isVisible, resourceId, itemInfo, visibleLoader){
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
                  <ItemInfoLoader visible={visibleLoader}/>
                  {(!visibleLoader) && <WooInfoModalBody resourceId={resourceId} resourceItemInfo={itemInfo} /> 
                  }
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={this.closeViewModal} bsStyle="primary">Close</Button>
              </Modal.Footer>
          </Modal>
    );
  }

  render() {
    const {resourceId,visible,itemInfo,visibleLoader} = this.props;
    return this.renderModal(visible, resourceId, itemInfo, visibleLoader);
  }

}

WooInfoModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  resourceId: PropTypes.number.isRequired,
  itemInfo: PropTypes.object.isRequired,
  visibleLoader: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let visibleLoader = false;
    let resourceId = state.modal.view.resourceId;
    let itemInfo = {};
    if (resourceId > -1){
      itemInfo = state.reducer_resources.find(x=>x.id === resourceId).view.item;
      visibleLoader = state.reducer_resources.find(x=>x.id === resourceId).view.visibleLoader;
    } 
    return {
        visible: state.modal.view.visible,
        resourceId: resourceId,
        itemInfo: itemInfo,
        visibleLoader: visibleLoader
    };
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(modalAction, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(WooInfoModal);
