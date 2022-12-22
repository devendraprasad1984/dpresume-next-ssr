import React, { useState } from "react";

import { config } from "../../configs/config";
import useAPI from "../../hooks/useAPI";
import NoData from "../common/nodata";
import {createRipple} from "../../configs/utils";
import Button from "../common/button";

const HomeDemo = () => {
  const [videoMode, setVideoMode] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
  const { data, loading, error } = useAPI(config.endpoints.HOME_DEMO);

  const demoPageContent = () => {
    if (data.length === 0) return;

    const { links, youtube } = data;
    let printLinks = () => {
      if (!demoMode) return null;
      return links.map((x, i) => {
        // let num = Math.floor(Math.random() * config.colors.length);
        // let color = config.colors[num] || "white";
        return (
          <a
            key={"link-demo" + i}
            className="mcard ripple"
            target="_blank"
            href={x.href}
          >
            <span className="center pcenter">{x.name}</span>
          </a>
        );
      });
    };
    let printYouTubeVideos = () => {
      if (!videoMode) return null;
      return youtube.map((x, i) => {
        return (
          <span key={"link-video-demo" + i}>
            <h2>{x.name}</h2>
            <iframe
              title={"my_vid_demo_" + i}
              width="100%"
              height="90%"
              src={x.src}
              frameBorder="0"
              allowFullScreen="allowfullscreen"
            />
          </span>
        );
      });
    };

    if (loading) return <NoData text={config.messages.PLZ_WAIT} />;
    if (error) return <NoData text={config.messages.ERROR} />;
    return (
      <div className="margin-ud">
        <div className="row">
          <Button click={(e) => {
            setDemoMode(!demoMode);
            setVideoMode(false);
          }}>Demo Apps</Button>
          <Button click={(e) => {
            setVideoMode(!videoMode);
            setDemoMode(false);
          }}>Video Demo Apps</Button>
        </div>
        {demoMode && <div className="flexbox cards">{printLinks()}</div>}
        {videoMode && (
          <div className="flexbox-video video-cards">
            {printYouTubeVideos()}
          </div>
        )}
      </div>
    );
  };

  return <div>{demoPageContent()}</div>;
};
export default React.memo(HomeDemo);
