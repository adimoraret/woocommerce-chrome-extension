import React, {PropTypes} from 'react';
import Preloader from './preloader.gif';

class Loader extends React.Component{
    constructor(props, context){
        super(props, context);
    }
    render() {
        const {numberOfColumns} = this.props;
        return(
            <tr style={{textAlign:"center"}}>
                <td colSpan={numberOfColumns}><img src={Preloader} /> </td>
            </tr>
        );
    }
}

Loader.propTypes = {
  numberOfColumns: PropTypes.number.isRequired
};


export default Loader;