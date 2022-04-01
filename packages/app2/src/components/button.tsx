import React from 'react'

interface Props {
    onClick: () => void;
    text: string
}

const Button: React.FC<Props> = (props) => {
    return (
        <button {...props}>{props.text}</button>
    )
}
export default Button
