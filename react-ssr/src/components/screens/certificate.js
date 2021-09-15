import React from 'react'
import {config} from "../../configs/config";
import BasicDisplay from "../common/basicDisplay";
import OneLinerHeader from "../common/oneLinerHeader";
import PropTypes from "prop-types";


const Certificate = props => {
    return <div>
        <OneLinerHeader title={props.title}/>
        <BasicDisplay list={config.localdata.CERT_DATA}/>
    </div>
}
Certificate.propTypes = {
    title: PropTypes.string.isRequired
}

export default Certificate
