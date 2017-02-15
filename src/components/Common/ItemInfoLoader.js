import React, {PropTypes} from 'react';
import Preloader from './preloader.gif';

class ItemInfoLoader extends React.Component{
    constructor(props, context){
        super(props, context);
    }
    render() {
      return(
          <div style={{textAlign:'center'}}>
              <img src={Preloader} />
          </div>
      );
    }
}

export default ItemInfoLoader;