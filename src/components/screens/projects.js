import PropTypes from "prop-types";
import React from "react";

import {config} from "../../configs/config";
import useAPI from "../../hooks/useAPI";
import NoData from "../common/nodata";
import OneLinerHeader from "../common/oneLinerHeader";

const Projects = (props) => {
  const { data, loading, error, time } = useAPI(config.endpoints.PROJECTS);

  const displayProjectDetails = (arr) => {
    return arr.map((row, i) => {
      let { name, desc } = row;
      return (
        <div key={"inside-proj-row" + i} className="margin-rl">
          <h3 className="xprimary">{name}</h3>
          <p className="margin-rl">{desc}</p>
        </div>
      );
    });
  };
  const display = () => {
    if (data.length === 0) return null;

    let keys = Object.keys(data);
    let values = Object.values(data);
    return keys.map((name, i) => {
      let obj = values[i];
      let isString = typeof obj === "string";
      let isObject = typeof obj === "object";
      let isLen = obj.length > 0;
      if (!isLen) return null;
      return (
        <div key={"proj_" + i}>
          <h1>{name}</h1>
          {isString && isLen ? <p>{obj}</p> : null}
          {isObject && isLen ? displayProjectDetails(obj) : null}
        </div>
      );
    });
  };

  if (loading) return <NoData text={config.messages.PLZ_WAIT} />;
  if (error) return <NoData text={config.messages.ERROR} />;
  return (
    <div className={"margin-ud"}>
      <OneLinerHeader title={props.title} />
      {display()}
    </div>
  );
};
export default React.memo(Projects);

Projects.propTypes = {
  title: PropTypes.string.isRequired,
};
