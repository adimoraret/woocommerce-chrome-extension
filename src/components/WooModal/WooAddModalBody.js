import React,{PropTypes} from 'react';

class WooAddModalBody extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {resourceId} = this.props;
    return(
        <div>Clicked on {resourceId} </div>
    );
  }

}

WooAddModalBody.propTypes = {
  resourceId: PropTypes.number.isRequired
};


export default WooAddModalBody;