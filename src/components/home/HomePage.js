import React from 'react';
import BriefInformation from '../BriefInformation/BriefInformation';
import Product from '../Product/Product';
import Coupon from '../Coupon/Coupon';

class HomePage extends React.Component {
  render() {
    return (
        <div>
            <BriefInformation />
            <section id="widget-grid">
              <div className="row">
                <Product /> 
                <Coupon />                                               
              </div>
            </section>
        </div>
    );
  }
}

export default HomePage;
