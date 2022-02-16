import React from 'react'

const Logger = (Component) => {
    const otherInjectedProps = {
        appName: 'dpresume.com'
    }
    console.log('logging', Component.name, Component.prototype)
    return props => <Component {...otherInjectedProps} {...props}/>
    // return Component
}

export default Logger