import React, {PropTypes} from 'react';
import WooGridBody from './WooGridBody';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import config from '../../config/config.js';
import * as wooActions from '../../actions/wooResourceActions';
import WooGridDropDown from './WooGridDropDown';
import WooSearch from './WooSearch';
import toastr from 'toastr';

class WooGrid extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.refreshGrid = this.refreshGrid.bind(this);
  }

  getRefreshIcon(resource){
    if (resource.list.visibleLoader) {
      return <i className="fa fa-refresh fa-spin" />;
    }
      return <i className="fa fa-refresh" onClick={this.refreshGrid} />;    
  }

  getHeaderBackground(resource){
    return `jarviswidget ${config.grid.titleBacgroundColor[resource.id-1]} jarviswidget-sortable`;
  }

  getGridIcon(resource){
    return `fa ${config.grid.icon[resource.id-1]}`;
  }

  refreshGrid(){
    const {resource} = this.props;
    this.props.actions.showLoader(resource.id);
    this.props.actions.loadWooResource(resource.id, resource.list.page, resource.list.appliedFilter)
      .catch(error => {
        this.props.actions.hideLoader(resource.id);
        toastr.error(error);
      });
  }

  render() {
    const {resource} = this.props;
    const refreshIcon = this.getRefreshIcon(resource);
    const {total, visibleLoader, appliedFilter} = resource.list;
    const filter = resource.list.filter;
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
              <i className={this.getGridIcon(resource)} />
            </span>
            {filter && filter.map(filterItem =>
                <div className="widget-toolbar" role="menu" key={filterItem.id}>
                  <WooGridDropDown 
                    resourceId={resource.id} 
                    title={filterItem.name}
                    type={filterItem.fieldName} 
                    filterId={filterItem.id} 
                    options={filterItem.options}
                    appliedFilter={appliedFilter}  
                    />
                </div>
            )}
            <div className="widget-toolbar smart-form">
              <WooSearch />
            </div>            
            <span className="jarviswidget-loader">
              <i className="fa fa-refresh fa-spin" />
            </span>                       
            <h2>{resource.list.title}</h2>                
          </header>
          <div role="content" style={{height:'250px'}}>
            <WooGridBody resource={resource} />
          </div>
        </div>
      </article>      
    );
  }
}

WooGrid.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(WooGrid);