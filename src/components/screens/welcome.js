import React, {useEffect, useState} from 'react'
import Modalify from "../common/modal";
import {modal} from "../../configs/config";
import PropTypes from "prop-types";

const Welcome = (props) => {
    const [isWelcome, setIsWelcome] = useState(true)
    const [counter, setCounter] = useState(5)
    let welcomeTimerRef

    const onClose = () => {
        clearInterval(welcomeTimerRef)
        setIsWelcome(false)
        props.onClose()
    }

    const handleTimer = () => {
        welcomeTimerRef = !welcomeTimerRef && setInterval((p1) => {
            setCounter((oldVal) => {
                if (oldVal === 0) onClose()
                return oldVal - 1
            })
            console.log('updated', p1)
        }, 1000, counter)
    }

    useEffect(() => {
        //mounting
        modal('modalwelcome').initModel() //working because of closures
        handleTimer()
        //unmount
        return () => {
            clearInterval(welcomeTimerRef)
            setCounter(c => 0)
            setIsWelcome(p => false)
        }
    }, [])

    return <div className='center size30 parent-center'>
        <Modalify
            tagid="modalwelcome"
            show={isWelcome}
            close={onClose}
        >
            <div className='child-center'>
                <h2>Welcome mate, How are you doing...</h2>
                <h4>We will go to Home page in </h4>
                <h1 className='xred size35 center'>{counter}</h1>
            </div>
        </Modalify>
    </div>
}
Welcome.propTypes = {
    onClose: PropTypes.func
}
export default Welcome