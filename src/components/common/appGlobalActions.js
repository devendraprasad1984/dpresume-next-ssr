import React, {useState} from "react";

import {checkNetworkConnection, getLocation, toggleFullScreen,} from "../../configs/config";

import Input from "./input";
import Modalify from "./modal";
// import DropDownGroupIcons from "./dropDownGroupIcons";
import HtmlComponent from "./htmlComponent";
// import useAPI from "../../hooks/useAPI";


const themeBgColor = "black";
const themeColor = "#4d4a4a";

const AppGlobalActions = (props) => {
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [longlat, setLonglat] = useState(null)
    // const [isBioSpeaking, setIsBioSpeaking] = useState(false)
    const [showWhatsappMsgWindow, setshowWhatsappMsgWindow] = useState(false)
    const [showscreenshot, setshowscreenshot] = useState(false)
    const [whereAmI, setWhereAmI] = useState(false)
    const [shownetwork, setShownetwork] = useState(false)
    const [networkMsg, setNetworkMsg] = useState('')
    const [msgText, setMsgText] = useState("")
    // let _tts = new TTS();

    const handleFullScreen = () => {
        toggleFullScreen();
        setIsFullscreen(!isFullscreen);
    };
    const handleLocation = () => {
        getLocation((data) => {
            setLonglat(data);
            setWhereAmI(true);
        });
    };
    // const {data, loading} = useAPI(config.endpoints.SUMMARY);
    // const handleSpeak = () => {
    //     if (loading) return;
    //     if (isBioSpeaking) {
    //         setIsBioSpeaking(false);
    //         _tts.stopSpeaking();
    //         return;
    //     }
    //     _tts.speakOut(data);
    //     setIsBioSpeaking(true);
    // };

    // useEffect(() => {
    //     if(whereAmI)
    //         modal("modallocation").initModel();
    //     if(showscreenshot)
    //         modal("testmodal").initModel();
    //     if(shownetwork)
    //         modal("checknetwork").initModel();
    //
    //     //unmount
    //     return () => {
    //         setLonglat(null);
    //         setWhereAmI(false);
    //         setShownetwork(false)
    //     };
    // }, []);

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

    // const handleScreenshot2 = () => {
    //     if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    //         console.log("enumerateDevices() not supported.");
    //         return;
    //     }
    //
    //     navigator.mediaDevices.enumerateDevices()
    //         .then(function (devices) {
    //             devices.forEach(function (device) {
    //                 console.log(device.kind + ": " + device.label +
    //                     " id = " + device.deviceId);
    //             });
    //         })
    //         .catch(function (err) {
    //             console.log(err.name + ": " + err.message);
    //         });
    // }

    const handleScreenshot = (ev) => {
        let width = 320
        let height = 200
        let streaming = false
        let video = document.getElementById('video');
        let canvas = document.getElementById('canvas');
        let photo = document.getElementById('photo');

        function clearCanvas() {
            let context = canvas.getContext('2d');
            context.fillStyle = "#AAA";
            context.fillRect(0, 0, 0, 0);
            canvas.style.display = 'none'
            // context.fillRect(0, 0, canvas.width, canvas.height);
        }

        function clearphoto() {
            clearCanvas()
            let data = canvas.toDataURL('image/png');
            photo.setAttribute('src', data);
        }

        function takepicture(callback) {
            let context = canvas.getContext('2d');
            if (width !== 0 && height !== 0) {
                canvas.width = width;
                canvas.height = height;
                context.drawImage(video, 0, 0, width, height);

                let data = canvas.toDataURL('image/png');
                // console.log('canvas', canvas, 'video', video, 'photo', photo, data)
                photo.setAttribute('src', data);
                callback()
            } else {
                clearphoto();
            }
        }

        function startup(callback) {
            navigator.mediaDevices.getUserMedia({video: true, audio: false})
                .then(function (stream) {
                    video.srcObject = stream;
                    video.play();
                    callback(stream)
                })
                .catch(function (err) {
                    console.log("An error occurred: " + err);
                });
            video.addEventListener('canplay', function (ev) {
                if (!streaming) {
                    height = video.videoHeight / (video.videoWidth / width);
                    video.setAttribute('width', width);
                    video.setAttribute('height', height);
                    canvas.setAttribute('width', width);
                    canvas.setAttribute('height', height);
                    streaming = true;
                }
            }, false);
            clearphoto();
        }

        startup(stream => {
            try {
                setTimeout(() => {
                    takepicture(() => {
                        video.pause()
                        stream.getTracks()[0].stop()
                        video.src = null
                        clearCanvas()
                    })
                }, 2000)
            } catch (err) {
                console.log("An error occurred: " + err);
            }
        })

    }

    const handleNetworkCheck = () => {
        let msg = checkNetworkConnection()
        setNetworkMsg(msg.join(''))
        setShownetwork(!shownetwork)
    }

    return (
        <div className="row wid30">
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

            <button
                className={!isFullscreen ? "primary" : "danger"}
                onClick={handleFullScreen}
            >
                {!isFullscreen ? "fullscreen" : "exit fullscreen"}
            </button>
            <button
                id="modallocation"
                className={"primary"}
                onClick={() => handleLocation()}
            >
                my location
            </button>

            <button
                id="testmodal"
                className={"primary"}
                onClick={() => setshowscreenshot(!showscreenshot)}
            >
                Take Selfie
            </button>
            <button id="checknetwork" className='success' onClick={() => handleNetworkCheck()}>Check Network Availability</button>
            {/*<button*/}
            {/*    className={"primary " + (isBioSpeaking ? "danger" : "")}*/}
            {/*    onClick={handleSpeak}*/}
            {/*>*/}
            {/*    {isBioSpeaking ? "Stop Speaking" : "Speak Bio"}*/}
            {/*</button>*/}
            {/*<DropDownGroupIcons id='idActionGlobalDropdown' placeholder='click to see demo web api...'>*/}
            {/*    /!*<button*!/*/}
            {/*    /!*    className={!isDarkMode ? "primary" : "danger"}*!/*/}
            {/*    /!*    onClick={handleSwitchTheme}*!/*/}
            {/*    /!*>*!/*/}
            {/*    /!*    {isDarkMode ? "light theme" : "dark theme"}*!/*/}
            {/*    /!*</button>*!/*/}

            {/*</DropDownGroupIcons>*/}


            {whereAmI && <Modalify
                tagid="modallocation"
                show={whereAmI}
                close={() => setWhereAmI(false)}
            >
                long lat: {JSON.stringify(longlat)}
            </Modalify>}

            {shownetwork && <Modalify
                tagid="checknetwork"
                show={shownetwork}
                close={() => setShownetwork(!shownetwork)}
            >
                <h2 className='danger'>network details</h2>
                <HtmlComponent>{networkMsg}</HtmlComponent>
            </Modalify>}

            {showscreenshot && <Modalify
                tagid="testmodal"
                show={showscreenshot}
                close={() => setshowscreenshot(!showscreenshot)}
            >
                <h2 className='success'>Selfie</h2>
                <div className="camera">
                    <video id="video">Video stream not available.</video>
                    <button id="startbutton" onClick={handleScreenshot}>Start</button>
                </div>
                <canvas id="canvas"></canvas>
                <div className="output">
                    <h3 className='danger'>your image will apear here</h3>
                    <img id="photo" alt="The screen capture will appear in this box."/>
                </div>
            </Modalify>}


            {showWhatsappMsgWindow && <Modalify
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
            </Modalify>}
        </div>
    );
};

export default React.memo(AppGlobalActions);
