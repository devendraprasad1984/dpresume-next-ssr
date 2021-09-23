import React, { useEffect, useState } from "react";

import {
  config,
  getLocation,
  modal,
  toggleFullScreen,
  TTS,
} from "../../configs/config";
import useAPI from "../../hooks/useAPI";

import Modalify from "./modal";

const themeBgColor = "black";
const themeColor = "#4d4a4a";

const AppGlobalActions = (props) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [longlat, setLonglat] = useState(null);
  const [showLongLat, setShowLongLat] = useState(false);
  const [isBioSpeaking, setIsBioSpeaking] = useState(false);
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
  const { data, loading } = useAPI(config.endpoints.SUMMARY);
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
    modal("modallocation").init();
    modal("testmodal").init();
    if (longlat === null) handleLocation();
    return () => {
      setLonglat(null);
      setShowLongLat(false);
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
  };

  return (
    <div className="">
      <button className={"primary"} onClick={handleSwitchTheme}>
        dark theme
      </button>
      <div className="xinfo">usage of few web apis</div>
      <button
        className={!isFullscreen ? "primary" : "danger"}
        onClick={handleFullScreen}
      >
        {!isFullscreen ? "fullscreen" : "exit fullscreen"}
      </button>
      <button id="modallocation" className={"primary"}>
        where am I?
      </button>
      <Modalify id="modallocation" show={showLongLat}>
        long lat: {JSON.stringify(longlat)}
      </Modalify>

      <button id="testmodal" className={"primary"}>
        take screenshot
      </button>
      <Modalify id="testmodal" show={true}>
        screenshot taken
      </Modalify>

      <button
        className={"primary " + (isBioSpeaking ? "danger" : "")}
        onClick={handleSpeak}
      >
        {isBioSpeaking ? "Stop Speaking" : "Speak Bio"}
      </button>
    </div>
  );
};

export default AppGlobalActions;
