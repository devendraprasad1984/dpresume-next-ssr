import PropTypes from "prop-types";
import React from "react";
// import {consoleText} from "../../configs/config";

const OneLinerHeader = ({title}) => {
    // useEffect(() => {
    //     consoleText([title])
    // }, [])
    return <div className='console-container'>
        <span id='text'></span>
        <div className='console-underscore size30 bg pad10' id='console'>{title}</div>
    </div>
};

export default React.memo(OneLinerHeader);

OneLinerHeader.propTypes = {
    title: PropTypes.string,
};
