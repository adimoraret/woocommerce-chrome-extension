import React from 'react';
import BriefInformation from '../BriefInformation/BriefInformation';
import WooResource from '../WooResource/WooResource';
import * as types from '../../actions/actionTypes';

class HomePage extends React.Component {
  render() {
    return (
        <div>
            <BriefInformation />
            <section id="widget-grid">
              <div className="row">
                <WooResource ResourceType={types.LOAD_PRODUCTS.NAME} />
                <WooResource ResourceType={types.LOAD_COUPONS.NAME} />                
              </div>
            </section>
        </div>
    );
  }
}

export default HomePage;
