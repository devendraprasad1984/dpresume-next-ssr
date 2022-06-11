import React, {useState} from "react";

import {config} from "../../configs/config";
import useAPI from "../../hooks/useAPI";
import NoData from "../common/nodata";

const HomeDemo = () => {
    const [videoMode, setVideoMode] = useState(false);
    const {data, loading, error} = useAPI(config.endpoints.HOME_DEMO);

    const demoPageContent = () => {
        if (data.length === 0) return;

        const {links, youtube} = data;
        let printLinks = () =>
            links.map((x, i) => {
                // let num = Math.floor(Math.random() * config.colors.length);
                // let color = config.colors[num] || "white";
                return (
                    <a
                        key={"link-demo" + i}
                        className="white mcard"
                        target="_blank"
                        href={x.href}
                    >
                        <span className="center pcenter">{x.name}</span>
                    </a>
                );
            });

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
        }

        if (loading) return <NoData text={config.messages.PLZ_WAIT}/>;
        if (error) return <NoData text={config.messages.ERROR}/>;
        return (
            <div className="margin-ud">
                <h1 className="row">
                    <span className="btn success">Demo Apps</span>
                    <span className="btn danger" onClick={() => setVideoMode(!videoMode)}>
            Click To see Video Demo
          </span>
                </h1>
                <div className="flexbox cards">{printLinks()}</div>
                <h1 className="margin-ud">
                    <span>{videoMode ? "Video Demo" : ""}</span>
                </h1>
                <div className="flexbox-video video-cards">{printYouTubeVideos()}</div>
            </div>
        );
    };

    return <div>{demoPageContent()}</div>;
};
export default React.memo(HomeDemo);
