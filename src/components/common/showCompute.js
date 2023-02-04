import React from 'react'
import PropTypes from "prop-types";

export default function ShowCompute(props) {
    const {time, loadTime} = props

    if (time === undefined && loadTime === undefined) return null
    return (
        <div className='right'>
            {time && <span className='xprimary'><b>fetched:</b> {time}ms</span>}
            {loadTime && <span className='xprimary'>&nbsp; <b>rendered:</b> {loadTime}ms</span>}
        </div>
    )
}
ShowCompute.propTypes = {
    time: PropTypes.any,
    loadTime: PropTypes.any
}
