import React, { useEffect, useState } from "react";
import getFromApi from "../apis/get";
import config from "../config";

const demoRowStyle = ["row", "marginUD"].join(" ");
const ShowDemo = () => {
  const [demoData, setDemoData] = useState([]);
  const [showDemoSection, setShowDemoSection] = useState(false);
  const [showYoutubeSection, setShowYoutubeSection] = useState(false);

  useEffect(() => {
    getFromApi(config.endpoints.demo, (res) => {
      setDemoData(res);
    });
  }, []);

  if (!demoData) return null;
  if (demoData.length === 0) return null;

  const { links, youtube } = demoData;

  return (
    <>
      <div
        className={["demoRowStyle", "button5"].join(" ")}
        onClick={() => setShowDemoSection(!showDemoSection)}
      >
        Apps Demo
      </div>
      {showDemoSection && (
        <div className={["demoRowStyle", "card"].join(" ")}>
          {links.map((line, id) => {
            return (
              <a
                key={`line-${id}`}
                href={line.href}
                target={"_blank"}
                rel="noreferrer"
              >
                {line.name}
              </a>
            );
          })}
        </div>
      )}

      <div
        className={["demoRowStyle", "button53"].join(" ")}
        onClick={() => setShowYoutubeSection(!showYoutubeSection)}
      >
        Demo on Youtube
      </div>
      {showYoutubeSection && (
        <div className={["demoRowStyle", "card"].join(" ")}>
          {youtube.map((line, id) => {
            return (
              <a
                key={`line-${id}`}
                href={line.src}
                target={"_blank"}
                rel="noreferrer"
              >
                {line.name}
              </a>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ShowDemo;
