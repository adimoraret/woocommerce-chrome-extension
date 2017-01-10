import React, {PropTypes} from 'react';
import WooGridBody from './WooGridBody';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wooResourceActions from '../../actions/wooResourceActions';
import config from '../../config/config.js';

class WooGrid extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

render() {
    const {resource} = this.props;
    return (
      <article className="col-sm-12 col-md-12 col-lg-6">
        <div className="jarviswidget jarviswidget-color-greenLight jarviswidget-sortable">
          <header role="heading">
            <span className="widget-icon">
              <i className="fa fa-table"></i>
            </span>                
            <h2>{resource.list.title}</h2>                
          </header>
          <div role="content">
            <WooGridBody resource={resource} />
          </div>
        </div>
      </article>      
    );
  }
}

export default WooGrid;
