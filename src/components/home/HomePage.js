import React from 'react';
import BriefInformation from '../BriefInformation/BriefInformation';
import WooAddModal from '../WooModal/WooAddModal';
import WooGrid from '../WooGrid/WooGrid';
import {connect} from 'react-redux';
import * as wooResourceActions from '../../actions/wooResourceActions';
import {bindActionCreators} from 'redux';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const {resources} = this.props;
    return (
        <div>
            <BriefInformation />
            <section id="widget-grid">
              <div className="row">
                  {resources.map(resource =>
                    <WooGrid key={resource.id} resource={resource}/>
                  )}
                <WooAddModal />
              </div>
            </section>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
      resources: state.reducer_resources
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(wooResourceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
