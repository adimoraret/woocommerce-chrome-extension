import React from 'react';
import TitleInformation from './TitleInformation';
import StatisticsInformation from './StatisticsInformation';

class BriefInformation extends React.Component {
  render() {
    return (
        <div className="row">
            <TitleInformation />
            <StatisticsInformation />
        </div>
    );
  }
}

export default BriefInformation;
