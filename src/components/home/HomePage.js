import React from 'react';
import BriefInformation from '../BriefInformation/BriefInformation';
import ProductInformation from '../ProductInformation/ProductInformation';
import CouponInformation from '../CouponInformation/CouponInformation';


class HomePage extends React.Component {
  render() {
    return (
        <div>
            <BriefInformation />
            <section id="widget-grid">
              <div className="row">
                <ProductInformation />
                <CouponInformation />
              </div>
            </section>
        </div>
    );
  }
}

export default HomePage;
