import React from 'react';
import WooResourceList from './WooResourceList';

class WooResouce extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

render() {
    const {title,columns,rows} = this.props;
    return (
      <article className="col-sm-12 col-md-12 col-lg-6">
        <div className="jarviswidget jarviswidget-color-greenLight jarviswidget-sortable">
          <header role="heading">
            <span className="widget-icon">
              <i className="fa fa-table"></i>
            </span>                
            <h2>{title}</h2>                
          </header>
          <div role="content">
            <WooResourceList columns={columns} rows={rows}/>
          </div>
        </div>
      </article>      
    );
  }
}

export default WooResouce;
