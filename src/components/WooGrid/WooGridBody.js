import React, {PropTypes} from 'react';
import WooGridRow from './WooGridRow';
import Loader from '../Common/Loader';
import WooGridPagination from './WooGridPagination';

class WooGridBody extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  getPagination(resource){
    if (resource.list.visibleLoader) {
      return null;
    }
    return ( 
      <div className="text-right">
        <WooGridPagination 
          numberOfItems={resource.list.total} 
          resourceId={resource.id}
          currentPage={resource.list.page}
          appliedFilter={resource.list.appliedFilter}/>
      </div>);
  }

  render() {
      const {resource} = this.props;
      const columns = resource.list.visible_properties;
      const rows = resource.list.items;
      const visibleLoader = resource.list.visibleLoader;
      return (
        <div className="widget-body no-padding">
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead>
              <tr>
                {columns.map(column =>
                  <th key={column.order}>
                    {column.displayName}
                    <a href="javascript:void(0);" className="btn-xs"><i className="fa fa-caret-down"></i></a>
                  </th>
                )}
                <th></th>
              </tr>
              </thead>
              <tbody>
                  {visibleLoader && <Loader numberOfColumns={columns.length+1}/>}
                  {rows.map(row =>
                    <WooGridRow key={row.id} resourceId={resource.id} row={row}/>
                  )}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={columns.length+1}>
                    {this.getPagination(resource)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>   
      );
    }
}

WooGridBody.propTypes = {
  resource: PropTypes.object.isRequired
};

export default WooGridBody;