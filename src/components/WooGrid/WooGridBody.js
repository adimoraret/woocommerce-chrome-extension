import React, {PropTypes} from 'react';
import WooGridRow from './WooGridRow';
import Loader from '../Common/Loader';
import WooGridPagination from './WooGridPagination';
import WooGridTableHeader from './WooGridTableHeader';

class WooGridBody extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  getPagination(resource){
    return ( 
      <div className="text-right">
        <WooGridPagination 
          numberOfItems={resource.list.total} 
          resourceId={resource.id}
          currentPage={resource.list.page}
          appliedFilter={resource.list.appliedFilter}/>
      </div>);
  }

  sortByColumn(fieldName){
    const {resource} = this.props;
    console.log("Resource ", resource.name, " Sorting by ", fieldName);
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
              <WooGridTableHeader resource={resource} />
              <tbody>
                  {visibleLoader && <Loader numberOfColumns={columns.length+1}/>}
                  {rows.map(row =>
                    <WooGridRow key={row.id} resourceId={resource.id} row={row}/>
                  )}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={columns.length+1}>
                    {!visibleLoader && this.getPagination(resource)}
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