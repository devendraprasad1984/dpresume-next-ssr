import React from 'react'
import {connect} from "react-redux";
import {Decrement, Increment} from "../../_redux/actions/testUpDown";


const TestUpDownConnect = props => {
    return <div>
        <button onClick={props.increment}>+</button>
        <span>{props.counterState}</span>
        <button onClick={props.decrement}>-</button>
    </div>
}

const mapX = state => {
    return {
        counterState: state.TestUpDown
    }
}
const mapD = dispatch => {
    return {
        increment: () => dispatch(Increment()),
        decrement: () => dispatch(Decrement())
    }
}
export default connect(mapX, mapD)(TestUpDownConnect)