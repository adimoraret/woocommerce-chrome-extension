import React, {PropTypes} from 'react';

const createCellContent = (column, resource) => {
  if (!resource[column.link]) {
    return resource[column.fieldName];
  }
  return(
    <a href={resource[column.link]} title={resource[column.title]}>{resource[column.fieldName]}</a> 
  );
}

const WooResourceListRow = ({columns, resource}) => {
  return(
    <tr>
        {columns.map(column =>
          <td key={column.order}>
            {createCellContent(column, resource)}
          </td>
        )}
      <td>
        <div className="btn-group pull-right margin-10">
          <button className="btn btn-info btn-xs">
            <i className="fa-fw fa fa-info"></i>
          </button>
          <button className="btn btn-primary btn-xs">
            <i className="fa fa-pencil"></i>
          </button>
          <button className="btn btn-danger btn-xs ">
            <i className="fa fa-times"></i>
          </button>      
        </div>
      </td>
    </tr>
  );
};

WooResourceListRow.propTypes = {
  columns: PropTypes.array.isRequired,
  resource: PropTypes.object.isRequired
};

export default WooResourceListRow;
