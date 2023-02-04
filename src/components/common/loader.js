import React, {Component} from 'react';
import loadingIcon from '../../assets/images/loading.svg';
import {config} from "src/configs/config";

class Loader extends Component {

    render() {
        return (<div className="loading col">
            <img src={loadingIcon} alt="Loading..." className='loading-image'/>
            <h3>{config.messages.PLZ_WAIT}</h3>
        </div>);
    }
}

export default Loader;
