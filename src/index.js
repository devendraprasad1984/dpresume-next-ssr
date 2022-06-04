import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import "./app.media.css";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import store from "./_redux/store";
// import {watchNetworkConnection} from "./configs/config";
// watchNetworkConnection()

//with useSelector, useDispatch hooks, we dont need to use connect HOC to get states from props
//actions - action creator pure functions - what to do
//reducers - reducer pure function - how to do
//store - global single source of truth, global data sharing, singleton object

//contexts for state & prop management are pub-sub/context-consumer pattern
//prop drilling - uni directional, top to bottom, parent to child way of data passing
store.subscribe(() => {
    console.log('state object via subscribe', store)
})

//change background image setinterval
const changeBg = () => {
    let bodyBg = document.getElementById('sidePicLeft')
    let imgNum = Math.floor(Math.random() * 8 + 1)
    bodyBg.style.backgroundImage = `url("/assets/bg${imgNum}.gif")`
}

const IndexApp = (<React.StrictMode>
        <div className='main-container'>
            <Provider store={store}>
                <App/>
            </Provider>
        </div>
    </React.StrictMode>
)

const root = document.getElementById("root")
const isSSR = process.env.IS_SSR
const renderMethod = isSSR ? ReactDOM.hydrate : ReactDOM.render
renderMethod(IndexApp, root)

setInterval(changeBg, 5000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
