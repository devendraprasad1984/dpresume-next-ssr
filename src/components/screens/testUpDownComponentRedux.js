import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Decrement, Increment} from "../../_redux/actions/testUpDown";


const TestUpDownComponentRedux = props => {
    const counterState = useSelector(_ => _.TestUpDown)
    const dispatch = useDispatch()
    return <div>
        <button onClick={() => dispatch(Increment())}>+</button>
        <span>{counterState}</span>
        <button onClick={() => dispatch(Decrement())}>-</button>
    </div>
}

export default TestUpDownComponentRedux