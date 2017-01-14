import React, {PropTypes} from 'react';
import Preloader from './preloader.gif';

class ItemInfoLoader extends React.Component{
    constructor(props, context){
        super(props, context);
    }
    render() {
        const {visible, numberOfColumns} = this.props;
        if (visible) {
            return(
                <div style={{textAlign:'center'}}>
                    <img src={Preloader} />
                </div>
            );
        }
        return null;
    }
}

ItemInfoLoader.propTypes = {
  visible: PropTypes.bool.isRequired,
};


export default ItemInfoLoader;