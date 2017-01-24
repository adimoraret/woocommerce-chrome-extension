import React from 'react';

class TitleInformation extends React.Component {
  render() {
    return (
        <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4">
            <h1 className="page-title txt-color-blueDark">
                <i className="fa-fw fa fa-home" />Dashboard <span>&gt; www.codetrest.com</span>
            </h1>
        </div>   
    );
  }
}

export default TitleInformation;
