import React, { useEffect, useState } from "react";

import { getLocation, modal, toggleFullScreen } from "../../configs/config";

import Modalify from "./modal";

const AppGlobalActions = (props) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [longlat, setLonglat] = useState(null);
  const [showLongLat, setShowLongLat] = useState(false);

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

  useEffect(() => {
    modal("modallocation").init();
    modal("testmodal").init();
    handleLocation();
  }, []);

  return (
    <div className="">
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
    </div>
  );
};

export default AppGlobalActions;
