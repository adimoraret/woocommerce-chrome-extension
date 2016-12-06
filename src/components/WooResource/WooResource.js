import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wooResourceActions from '../../actions/wooResourceActions';
import WooResourceList from './WooResourceList';

class WooResouce extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

render() {
    const {title,columns,rows} = this.props;
    return (
      <article className="col-sm-12 col-md-12 col-lg-6">
        <div className="jarviswidget jarviswidget-color-greenLight jarviswidget-sortable">
          <header role="heading">
            <span className="widget-icon">
              <i className="fa fa-table"></i>
            </span>                
            <h2>{title}</h2>                
          </header>
          <div role="content">
            <WooResourceList columns={columns} rows={rows}/>
          </div>
        </div>
      </article>      
    );
  }

}

WooResouce.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    title: state.products.title,
    columns: state.products.columns,
    rows: state.products.rows
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(wooResourceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WooResouce);
