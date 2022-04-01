import React, {useEffect, useState} from 'react'
import Modalify from "../common/modal";
import {modal} from "../../configs/config";
import PropTypes from "prop-types";

const Welcome = (props) => {
    const [isWelcome, setIsWelcome] = useState(true)
    const [counter, setCounter] = useState(15)
    const [name, setName] = useState('mate')
    let welcomeTimerRef

    const onClose = () => {
        clearInterval(welcomeTimerRef)
        setIsWelcome(false)
        props.onClose(name)
    }

    const handleTimer = () => {
        welcomeTimerRef = !welcomeTimerRef && setInterval((p1) => {
            setCounter((oldVal) => {
                if (oldVal === 0) onClose()
                return oldVal - 1
            })
            // console.log('updated', p1)
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

    return <div className='center parent-center'>
        <Modalify
            tagid="modalwelcome"
            show={isWelcome}
            close={onClose}
        >
            <div className='child-center'>
                <div>Welcome mate, How are you doing...</div>
                <div>We will go to Home page in </div>
                <div className='xred size45 center'>{counter}</div>
                <div>
                    <h2>personalise your visit, again!!!</h2>
                    <span className='xred'>its not saved anywhere but your session only</span>
                    <input type="text" placeholder="what's you name, skip if you dont want it" onChange={(e)=>setName(e.target.value)}/>
                    <button className='btn purple xwhite' onClick={()=>onClose()}>proceed now</button>
                </div>
            </div>
        </Modalify>
    </div>
}
Welcome.propTypes = {
    onClose: PropTypes.func
}
export default React.memo(Welcome)