import React,{PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalAction from '../../actions/wooModalActions';

class WooModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeModal = this.closeModal.bind(this);
  }
  render() {
    const {title,columns,visible} = this.props;
    if (visible) {
        return this.renderModal(title, columns);
    }
    return null;
  }

  closeModal(){
    this.props.dispatch(modalAction.closeModal());
  }
  
  renderModal(title, columns){
    return (
        <div className="static-modal">
            <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                One fine body...
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

WooModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        visible: state.modal.visible,
        title: state.modal.title
    };
}

export default connect(mapStateToProps)(WooModal);
