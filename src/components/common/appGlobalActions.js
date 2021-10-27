import React, {useEffect, useState} from "react";

import {
    checkNetworkConnection,
    config,
    getLocation,
    modal,
    toggleFullScreen,
    TTS, watchNetworkConnection,
} from "../../configs/config";
import useAPI from "../../hooks/useAPI";

import Input from "./input";
import Modalify from "./modal";
import Dropdown from "./dropdown";
import HtmlComponent from "./htmlComponent";

const themeBgColor = "black";
const themeColor = "#4d4a4a";

const AppGlobalActions = (props) => {
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [longlat, setLonglat] = useState(null)
    const [showLongLat, setShowLongLat] = useState(false)
    const [isBioSpeaking, setIsBioSpeaking] = useState(false)
    const [showWhatsappMsgWindow, setshowWhatsappMsgWindow] = useState(false)
    const [showscreenshot, setshowscreenshot] = useState(false)
    const [whereAmI, setWhereAmI] = useState(false)
    const [shownetwork, setShownetwork] = useState(false)
    const [networkMsg, setNetworkMsg] = useState('')
    const [msgText, setMsgText] = useState("")
    let _tts = new TTS();

    const handleFullScreen = () => {
        toggleFullScreen();
        setIsFullscreen(!isFullscreen);
    };
    const handleLocation = () => {
        getLocation((data) => {
            setLonglat(data);
            setShowLongLat(true);
        });
    };
    const {data, loading} = useAPI(config.endpoints.SUMMARY);
    const handleSpeak = () => {
        if (loading) return;
        if (isBioSpeaking) {
            setIsBioSpeaking(false);
            _tts.stopSpeaking();
            return;
        }
        _tts.speakOut(data);
        setIsBioSpeaking(true);
    };

    useEffect(() => {
        modal("modallocation").initModel();
        modal("testmodal").initModel();
        modal("checknetwork").initModel();

        if (longlat === null) handleLocation();
        //unmount
        return () => {
            setLonglat(null);
            setShowLongLat(false);
            setShownetwork(false)
        };
    }, []);

    const handleSwitchTheme = () => {
        let all = document.querySelector("*");
        let _all = document.querySelectorAll(["div", "a", "h1", "h2", "li"]);
        let curtheme = all.style.backgroundColor;
        all.style.backgroundColor = curtheme === themeBgColor ? "" : themeBgColor;
        // console.log(_all)
        _all.forEach((elm) => {
            elm.style.color = elm.style.color === "white" ? themeColor : "white";
        });
        setIsDarkMode(!isDarkMode);
    };

    const handleNetworkCheck=()=>{
        let msg=checkNetworkConnection()
        setNetworkMsg(msg.join(''))
        setShownetwork(!shownetwork)
    }

    return (
        <div className="row center">
            <button
                className="xwhite green"
                onClick={() => window.open("tel:+919582797772")}
            >
                call me
            </button>
            <button
                id="btnwhatsapp"
                className="danger xwhite"
                onClick={() => setshowWhatsappMsgWindow(!showWhatsappMsgWindow)}
            >
                whatsapp me
            </button>
            <Dropdown id='idActionGlobalDropdown' placeholder='click to see demo web api...'>
                <button
                    className={!isDarkMode ? "primary" : "danger"}
                    onClick={handleSwitchTheme}
                >
                    {isDarkMode ? "light theme" : "dark theme"}
                </button>
                <button
                    className={!isFullscreen ? "primary" : "danger"}
                    onClick={handleFullScreen}
                >
                    {!isFullscreen ? "fullscreen" : "exit fullscreen"}
                </button>
                <button
                    id="modallocation"
                    className={"primary"}
                    onClick={() => setWhereAmI(!whereAmI)}
                >
                    where am I?
                </button>

                <button
                    id="testmodal"
                    className={"primary"}
                    onClick={() => setshowscreenshot(!showscreenshot)}
                >
                    take screenshot
                </button>
                <button
                    className={"primary " + (isBioSpeaking ? "danger" : "")}
                    onClick={handleSpeak}
                >
                    {isBioSpeaking ? "Stop Speaking" : "Speak Bio"}
                </button>
                <span className="custom-option" data-value="network">
                    <button id="checknetwork" onClick={()=>handleNetworkCheck()}>Check Network Availability</button>
                </span>
            </Dropdown>

            <Modalify
                tagid="modallocation"
                show={showLongLat}
                close={() => setWhereAmI(!whereAmI)}
            >
                long lat: {JSON.stringify(longlat)}
            </Modalify>
            <Modalify
                tagid="checknetwork"
                show={shownetwork}
                close={() => setShownetwork(!shownetwork)}
            >
                <h2 className='danger'>network details</h2>
                <HtmlComponent>{networkMsg}</HtmlComponent>
            </Modalify>
            <Modalify
                tagid="testmodal"
                show={showscreenshot}
                close={() => setshowscreenshot(!showscreenshot)}
            >
                screenshot taken
            </Modalify>


            <Modalify
                tagid="btnwhatsapp"
                show={showWhatsappMsgWindow}
                close={() => setshowWhatsappMsgWindow(!showWhatsappMsgWindow)}
            >
                <h3>whatsapp message</h3>
                <Input
                    label="send me whatsapp note, i will connect back"
                    placeholder="enter your message eg"
                    value={msgText}
                    onChange={(e) => {
                        setMsgText(e.target.value);
                    }}
                />
                <button
                    className="success"
                    onClick={() => {
                        window.open(
                            `https://wa.me/+919582797772?text=${msgText}`,
                            "_blank"
                        );
                        setshowWhatsappMsgWindow(!showWhatsappMsgWindow);
                    }}
                >
                    send
                </button>
            </Modalify>
        </div>
    );
};

export default AppGlobalActions;
