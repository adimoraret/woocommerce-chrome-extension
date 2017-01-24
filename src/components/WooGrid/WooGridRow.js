import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import config from '../../config/config';
import {bindActionCreators} from 'redux';
import * as wooActions from '../../actions/wooResourceActions';
import * as modalAction from '../../actions/wooModalActions';

class WooGridRow extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.openModal = this.openModal.bind(this);
  }

  createCellContent(column, row) {
    if (!row[column.link]) {
        return row[column.fieldName];
    }
    return(
      <a href={row[column.link]} title={row[column.title]}>{row[column.fieldName]}</a> 
    );
  }

  openModal(){
    const selectedResource = config.resources.find(x => x.id === this.props.resourceId);
    this.props.actions.openModal(this.props.resourceId);    
    this.props.actions.showInfoLoader(selectedResource.id);
    this.props.actions.loadWooResourceInfo(selectedResource.id, this.props.row["id"]);
  }

  render() {
    const {row, resourceId} = this.props;
    const selectedResource = config.resources.find(x=>x.id === resourceId);
    const columns = selectedResource.list.visible_properties;
    const shouldShowInfo = !!selectedResource.view.url;
    return(
        <tr>
            {columns.map(column =>
              <td key={column.order}>
                {this.createCellContent(column, row)}
              </td>
            )}
          <td>
            <div className="btn-group pull-right margin-10">
               {shouldShowInfo && 
                <button className="btn btn-info btn-xs" onClick={this.openModal}>
                  <i className="fa-fw fa fa-info" />
                </button>
                }
              <button className="btn btn-danger btn-xs ">
                <i className="fa fa-times" />
              </button>      
            </div>
          </td>
        </tr>
      );    
  }

}

WooGridRow.propTypes = {
  resourceId: PropTypes.number.isRequired,
  row: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
 return {
 };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, wooActions, modalAction), dispatch)
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(WooGridRow);