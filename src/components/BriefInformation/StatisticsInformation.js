import React from 'react';
import StatisticsIncome from './StatisticsIncome';

class StatisticsInformation extends React.Component {
  render() {
    return (
        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-8">
            <ul id="sparks">
                <StatisticsIncome/>
            </ul>
        </div>
    );
  }
}

export default StatisticsInformation;
