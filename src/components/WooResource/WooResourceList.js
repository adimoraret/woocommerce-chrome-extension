import React, {PropTypes} from 'react';
import WooResourceListRow from './WooResourceListRow';

const WooResourceList = ({columns, rows}) => {
  return (
    <div className="widget-body no-padding">
      <div className="alert alert-info no-margin fade in">
        <i className="fa-fw fa fa-info"></i>Adds zebra-striping to table row within <code>&lt;table&gt;</code> by adding the <code>.table-striped</code> with the base class
			</div>    
      <div className="table-responsive">    
        <table className="table table-hover">
          <thead>
          <tr>
            {columns.map(column =>
              <th key={column.order}>{column.displayName}</th>
            )}
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
              {rows.map(row =>
                <WooResourceListRow key={row.id} columns={columns} resource={row}/>
              )}
          </tbody>
        </table>
      </div>
    </div>        
  );
};

WooResourceList.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired  
};

export default WooResourceList;
