import React, {PropTypes} from 'react';
import * as modalAction from '../../actions/wooModalActions';
import {connect} from 'react-redux';

class WooResourceListRow extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.openModal = this.openModal.bind(this);
  }

  createCellContent(column, resource) {
    if (!resource[column.link]) {
        return resource[column.fieldName];
    }
    return(
      <a href={resource[column.link]} title={resource[column.title]}>{resource[column.fieldName]}</a> 
    );   
  }

  openModal(){
    this.props.dispatch(modalAction.openModal("some title"));
  }

  render() {
    const {columns, resource} = this.props;
    return(
        <tr>
            {columns.map(column =>
              <td key={column.order}>
                {this.createCellContent(column, resource)}
              </td>
            )}
          <td>
            <div className="btn-group pull-right margin-10">
              <button className="btn btn-info btn-xs">
                <i className="fa-fw fa fa-info"></i>
              </button>
              <button className="btn btn-primary btn-xs" onClick={this.openModal}>
                <i className="fa fa-pencil"></i>
              </button>
              <button className="btn btn-danger btn-xs ">
                <i className="fa fa-times"></i>
              </button>      
            </div>
          </td>
        </tr>
      );    
  }

}

WooResourceListRow.propTypes = {
  columns: PropTypes.array.isRequired,
  resource: PropTypes.object.isRequired
};

//This seems a hack to have the dispatch available
function mapStateToProps(state, ownProps) {
 return {
 };
}

export default connect(mapStateToProps)(WooResourceListRow);