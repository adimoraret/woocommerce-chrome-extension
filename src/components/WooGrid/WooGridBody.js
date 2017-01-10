import React, {PropTypes} from 'react';
import WooGridRow from './WooGridRow';
import Loader from '../Common/Loader';
import {connect} from 'react-redux';

class WooGridBody extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {resource} = this.props;
    const columns = resource.list.visible_properties;
    const rows = resource.list.items;
    const visibleLoader = resource.list.visibleLoader;
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
              <th></th>
            </tr>
            </thead>
            <tbody>
                <Loader visible={visibleLoader} numberOfColumns={columns.length+1}/>
                {rows.map(row =>
                  <WooGridRow key={row.id} columns={columns} row={row}/>
                )}
            </tbody>
          </table>
        </div>
      </div>   
    );
  }
}

WooGridBody.propTypes = {
  resource: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
 return {
    resources: state.resources
  };
}

export default connect(mapStateToProps)(WooGridBody);