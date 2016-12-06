import React from 'react';
import BriefInformation from '../BriefInformation/BriefInformation';
import WooResource from '../WooResource/WooResource';

class HomePage extends React.Component {
  render() {
    return (
        <div>
            <BriefInformation />
            <section id="widget-grid">
              <div className="row">
                <WooResource />
                <WooResource />                
              </div>
            </section>
        </div>
    );
  }
}

export default HomePage;
