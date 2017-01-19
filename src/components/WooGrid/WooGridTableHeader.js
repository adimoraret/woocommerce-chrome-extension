import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as wooActions from '../../actions/wooResourceActions';


class WooGridTableHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.sortByColumn = this.sortByColumn.bind(this);
  }

  sortByColumn(fieldName){
    const {resource} = this.props;
    const appliedSort = {sortBy: fieldName, direction: !resource.list.appliedSort.direction }
    this.props.dispatch(wooActions.showLoader(resource.id));
    this.props.dispatch(wooActions.loadWooResource(resource.id, resource.list.page, resource.list.appliedFilter, appliedSort));
  }

  getSortIcon(appliedSort, fieldName){
    if(fieldName != appliedSort.sortBy) {
      return (<i className="fa fa-sort"></i>);
    }
    if (appliedSort.direction) {
      return (<i className="fa fa-caret-up"></i>)
    } 
    return (<i className="fa fa-caret-down"></i>)      
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
                <a href="javascript:void(0);" className="btn-xs" onClick={()=>this.sortByColumn(column.fieldName)}>
                  {this.getSortIcon(resource.list.appliedSort, column.fieldName)}
                </a>
              </th>
            )}
            <th></th>
          </tr>
        </thead>
      );
    }
}

WooGridTableHeader.propTypes = {
  resource: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
    };
}

export default connect(mapStateToProps)(WooGridTableHeader);