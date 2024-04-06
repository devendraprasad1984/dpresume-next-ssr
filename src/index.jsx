import React from "react";
import {createRoot} from "react-dom/client";

import "./index.css";
import App from "./App";
import "./app.media.css";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import store from "./_redux/store";
import ProgressValue from "./components/common/progressValue.jsx";
// import {watchNetworkConnection} from "./configs/config";
// watchNetworkConnection()

//with useSelector, useDispatch hooks, we dont need to use connect HOC to get states from props
//actions - action creator pure functions - what to do
//reducers - reducer pure function - how to do
//store - global single source of truth, global data sharing, singleton object

//contexts for state & prop management are pub-sub/context-consumer pattern
//prop drilling - uni directional, top to bottom, parent to child way of data passing
// store.subscribe(() => {
//     console.log('state object via subscribe', store.getState())
// })

//getting vars from env file
// const isSSR = process.env.REACT_APP_IS_SSR !== "false";
const isSSR = import.meta.env.REACT_APP_IS_SSR !== "false";

//change background image setinterval
// document.onclick = (e) => applyCursorRippleEffect(e);
const changeBg = () => {
  let bodyBg = document.getElementById("bggif");
  let imgNum = Math.floor(Math.random() * 9);
  try {
    bodyBg.style.backgroundImage = `url("/public/assets/bg${imgNum}.gif")`;
  } catch (err) {
  }
};

const IndexApp = <div className="main-container">
  <Provider store={store}>
    <ProgressValue/>
    <App/>
  </Provider>
</div>;

const container = document.getElementById("root");
// const root = isSSR ? hydrateRoot(container) : createRoot(container);
const root = createRoot(container);
// const renderMethod = isSSR ? ReactDOM.hydrate : ReactDOM.render
// renderMethod(IndexApp, root)
root.render(IndexApp);

setInterval(changeBg, 7000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
