import React from 'react';
import BriefInformation from '../BriefInformation/BriefInformation';
import Product from '../Product/Product';
import Coupon from '../Coupon/Coupon';
import WooModal from '../WooModal/WooModal';

class HomePage extends React.Component {
  render() {
    return (
        <div>
            <BriefInformation />
            <section id="widget-grid">
              <div className="row">
                <Product /> 
                <Coupon />
                <WooModal />
              </div>
            </section>
        </div>
    );
  }
}

export default HomePage;
