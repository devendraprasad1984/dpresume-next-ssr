import React, {useEffect, useState} from 'react'
import Modalify from "../common/modal";
import {modal} from "../../configs/config";
import PropTypes from "prop-types";

const Welcome = (props) => {
    const [isWelcome, setIsWelcome] = useState(true)
    const [counter, setCounter] = useState(5)

    const onClose = () => {
        clearInterval(welcomeTimerRef)
        setIsWelcome(false)
        props.onClose()
    }
    let welcomeTimerRef

    const handleTimer = () => {
        if (welcomeTimerRef !== undefined) return
        welcomeTimerRef = setInterval(() => {
            setCounter((oldVal) => {
                if (oldVal === 0) onClose()
                return oldVal - 1
            })
        }, 1000)
    }

    useEffect(() => {
        //mounting
        modal('modalwelcome').initModel() //working because of closures
        handleTimer()
        //unmount
        return () => {
            setCounter(c => 0)
            setIsWelcome(p => false)
            clearInterval(welcomeTimerRef)
        }
    }, [])

    return <div className='center size30'>
        <Modalify
            tagid="modalwelcome"
            show={isWelcome}
            close={onClose}
        >
            <h2>Welcome mate, How are you doing...</h2>
            <h4>We will go to Home page in </h4>
            <h1 className='xred size35 center'>{counter}</h1>
        </Modalify>
    </div>
}
Welcome.propTypes = {
    onClose: PropTypes.func
}
export default Welcome