import React, {PropTypes} from 'react';
import Preloader from './preloader.gif';

class Loader extends React.Component{
    constructor(props, context){
        super(props, context);
    }
    render() {
        const {visible, numberOfColumns} = this.props;
        if (visible) {
            return(
                <tr style={{textAlign:"center"}}>
                    <td colSpan={numberOfColumns}><img src={Preloader} /> </td>
                </tr>
            );
        }
        return null;
    }
}

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
  numberOfColumns: PropTypes.number.isRequired
};


export default Loader;