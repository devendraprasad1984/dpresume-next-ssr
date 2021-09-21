import React, { useEffect, useState } from "react";

import { config } from "../../configs/config";
import useAPI from "../../hooks/useAPI";

import NoData from "./nodata";

const BottomBar = (props) => {
  const [links, setLinks] = useState([]);
  const { data, loading, error } = useAPI(config.endpoints.LINKS);
  useEffect(() => {
    setLinks(data);
  }, [data]);

  const displayLinks = () => {
    const linksKey = Object.keys(links);
    const linksValues = Object.values(links);
    if (linksKey.length === 0) return null;
    return linksKey.map((link, index) => {
      return (
        <a
          className="btn"
          href={linksValues[index]}
          target="_blank"
          key={"link-key-" + index}
        >
          {link}
        </a>
      );
    });
  };

  if (loading) return <NoData text={config.messages.PLZ_WAIT} />;
  if (error) return <NoData text={config.messages.ERROR} />;
  return <div className="bottom right margin-ud">{displayLinks()}</div>;
};
export default BottomBar;
