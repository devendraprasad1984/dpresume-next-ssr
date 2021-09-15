import React from "react";
import PropTypes from "prop-types";


const OneLinerHeader = props => {
    return <h1 className='active size25'>{props.title}</h1>
}

export default OneLinerHeader

OneLinerHeader.propTypes = {
    title: PropTypes.string,
}
