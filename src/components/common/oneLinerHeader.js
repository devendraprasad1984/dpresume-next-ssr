import PropTypes from "prop-types";
import React, {useEffect} from "react";
import {consoleText} from "../../configs/config";

const OneLinerHeader = ({title}) => {
    useEffect(() => {
        consoleText([title])
    }, [])
    return <div className='console-container'><span id='text'>{title}</span>
        <div className='console-underscore' id='console'>&#95;</div>
    </div>
};

export default OneLinerHeader;

OneLinerHeader.propTypes = {
    title: PropTypes.string,
};
