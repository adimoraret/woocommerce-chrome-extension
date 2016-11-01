import React from 'react';

class StatisticsIncome extends React.Component {
  render() {
    return (
        <li className="sparks-info">
            <h5> Total Income <span className="txt-color-blue">$47,171</span></h5>
            <div className="sparkline txt-color-blue hidden-mobile hidden-md hidden-sm">
                <canvas id="statistics-income" width="89" height="26"></canvas>
            </div>
        </li>
    );
  }
}

export default StatisticsIncome;
