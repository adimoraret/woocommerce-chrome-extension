import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as wooActions from '../../actions/wooResourceActions';


class WooGridTableHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.bindTableHeaderClickActions();
  }

  bindTableHeaderClickActions(){
    this.tableHeaderClickActions = [];
    const {resource} = this.props;
    const columns = resource.list.visible_properties;
    columns.forEach((column) => {
      this.tableHeaderClickActions[column.order] = this.sortByColumn.bind(this, column.fieldName); 
    });
  }

  sortByColumn(fieldName){
    const {resource} = this.props;
    const appliedSort = {sortBy: fieldName, direction: !resource.list.appliedSort.direction};
    this.props.actions.showLoader(resource.id);
    this.props.actions.loadWooResource(resource.id, resource.list.page, resource.list.appliedFilter, appliedSort);
  }

  getSortIcon(appliedSort, fieldName){
    if(fieldName != appliedSort.sortBy) {
      return (<i className="fa fa-sort"/>);
    }
    if (appliedSort.direction) {
      return (<i className="fa fa-caret-up"/>);
    } 
    return (<i className="fa fa-caret-down"/>);     
  }

  render() {
      const {resource} = this.props;
      const columns = resource.list.visible_properties;
      return (
        <thead>
          <tr>
            {columns.map(column =>
              <th key={column.order}>
                {column.displayName}
                <a href="javascript:void(0);" className="btn-xs" onClick={this.tableHeaderClickActions[column.order]}>
                  {this.getSortIcon(resource.list.appliedSort, column.fieldName)}
                </a>
              </th>
            )}
            <th/>
          </tr>
        </thead>
      );
    }
}

WooGridTableHeader.propTypes = {
  resource: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
    };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(wooActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WooGridTableHeader);