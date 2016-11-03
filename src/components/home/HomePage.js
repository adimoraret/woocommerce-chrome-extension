import React from 'react';
import BriefInformation from '../BriefInformation/BriefInformation';
import ProductInformation from '../ProductInformation/ProductInformation';

class HomePage extends React.Component {
  render() {
    return (
        <div>
            <BriefInformation />
            <ProductInformation />
        </div>
    );
  }
}

export default HomePage;
