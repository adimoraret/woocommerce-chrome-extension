import React,{PropTypes} from 'react';

class WooInfoModalBody extends React.Component {

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

WooInfoModalBody.propTypes = {
  resourceId: PropTypes.number.isRequired
};


export default WooInfoModalBody;