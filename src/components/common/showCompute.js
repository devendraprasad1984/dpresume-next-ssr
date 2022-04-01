import React from 'react'
import PropTypes from "prop-types";

export default function ShowCompute(props) {
    const {time, loadTime} = props
    return (
        <div className='right'>
            fetched in {time && <span className='xprimary'>{time}ms</span>}
            {loadTime && "rendered in"}
            {loadTime && <span className='xprimary'>{loadTime}ms</span>}
        </div>
    )
}
ShowCompute.propTypes = {
    time: PropTypes.number,
    loadTime: PropTypes.number
}
