import React, {useState} from "react";
import "./App.css";
import "./console.css";
import Main from "./components/main";
import Welcome from "./components/screens/welcome";
import {config} from "./configs/config";
import Logger from "./hoc/logger";

const nameFromLocalStorage = localStorage.getItem(config.enums.localStorage.name)
const isNameSet = nameFromLocalStorage !== '' && nameFromLocalStorage !== null && nameFromLocalStorage !== undefined
console.log('nameFromLocalStorage',nameFromLocalStorage, isNameSet)

function App(props) {
    console.log('app from hoc', props.getFromLocalStore())
    const [canWeShowWelcome, setCanWeShowWelcome] = useState(!isNameSet)
    const handleCloseWelcome = (name) => {
        console.log('closing in main app. found', name)
        localStorage.setItem(config.enums.localStorage.name, name)
        setCanWeShowWelcome(false)
    }
    return canWeShowWelcome ? (<Welcome onClose={handleCloseWelcome}/>) : <Main/>
}

export default Logger(App);
