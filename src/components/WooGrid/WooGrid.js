import React, {PropTypes} from 'react';
import WooGridBody from './WooGridBody';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import config from '../../config/config.js';
import * as wooActions from '../../actions/wooResourceActions';
import WooGridPagination from './WooGridPagination';

class WooGrid extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.refreshGrid = this.refreshGrid.bind(this);
  }

  getRefreshIcon(resource){
    if (resource.list.visibleLoader) {
      return <i className="fa fa-refresh fa-spin"></i>;
    }
      return <i className="fa fa-refresh" onClick={this.refreshGrid}></i>;    
  }

  getHeaderBackground(resource){
    return `jarviswidget ${config.grid.titleBacgroundColor[resource.id-1]} jarviswidget-sortable`;
  }

  getGridIcon(resource){
    return `fa ${config.grid.icon[resource.id-1]}`;
  }

  refreshGrid(){
    const {resource} = this.props;
    this.props.dispatch(wooActions.showLoader(resource));
    this.props.dispatch(wooActions.loadWooResource(resource, resource.list.page));
  }

  getPagination(resource){
    if (resource.list.visibleLoader) {
      return null;
    }
    return ( <div style={{textAlign:'right'}}>
        <WooGridPagination numberOfItems={resource.list.total} resource={resource}/>
      </div>);
  }

  render() {
    const {resource} = this.props;
    const refreshIcon = this.getRefreshIcon(resource);
    const {total, visibleLoader} = resource.list;
    return (
      <article className="col-sm-12 col-md-12 col-lg-6">
        <div className={this.getHeaderBackground(resource)}>
          <header role="heading">
              <div className="jarviswidget-ctrls" role="menu">
                <a href="javascript:void(0)" className="button-icon jarviswidget-toggle-btn">
                  {refreshIcon}
                </a>
              </div>          
            <span className="widget-icon">
              <i className={this.getGridIcon(resource)}></i>
            </span>
            <span className="jarviswidget-loader">
              <i className="fa fa-refresh fa-spin"></i>
            </span>                       
            <h2>{resource.list.title}</h2>                
          </header>
          <div role="content" style={{height:'250px'}}>
            <WooGridBody resource={resource} />
            {this.getPagination(resource)}
          </div>
        </div>
      </article>      
    );
  }
}

function mapStateToProps(state, ownProps) {
 return {
 };
}

export default connect(mapStateToProps)(WooGrid);