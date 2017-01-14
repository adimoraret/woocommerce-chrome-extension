import React, {PropTypes} from 'react';
import * as modalAction from '../../actions/wooModalActions';
import {connect} from 'react-redux';
import config from '../../config/config';
import * as WooActions from '../../actions/wooResourceActions';

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
    this.props.dispatch(modalAction.openModal(this.props.resourceId));    
    this.props.dispatch(WooActions.showInfoLoader(selectedResource));
    this.props.dispatch(WooActions.loadWooResourceInfo(selectedResource, this.props.row["id"]));
    
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
                  <i className="fa-fw fa fa-info"></i>
                </button>
                }
              <button className="btn btn-danger btn-xs ">
                <i className="fa fa-times"></i>
              </button>      
            </div>
          </td>
        </tr>
      );    
  }

}

WooGridRow.propTypes = {
  resourceId: PropTypes.number.isRequired,
  row: PropTypes.object.isRequired 
};

//this.props will have the dispatch available
function mapStateToProps(state, ownProps) {
 return {
 };
}

export default connect(mapStateToProps)(WooGridRow);