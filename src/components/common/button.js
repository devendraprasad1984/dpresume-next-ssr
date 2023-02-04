import React from 'react'

const Button = props => {
    const {text, children, click} = props
    return <React.Fragment>
        <button
            className='btn ripple info'
            onClick={click}
        >
            {children !== undefined ? children : text}
        </button>
    </React.Fragment>
}

export default Button

