import PropTypes from "prop-types";
import React from "react";

import {config} from "../../configs/config";
import useAPI from "../../hooks/useAPI";
import BasicDisplay from "../common/basicDisplay";
import NoData from "../common/nodata";
import OneLinerHeader from "../common/oneLinerHeader";

const Experience = (props) => {
  const { data, loading, error } = useAPI(config.endpoints.EXPERIENCE);

  const display = () => {
    let keys = Object.keys(data);
    let values = Object.values(data);
    return keys.map((x, i) => {
      let { role, time, projects, speek, summary } = values[i];
      return (
        <div key={"proj_exp_" + i}>
          <h1>
            {role} - {time} {speek ? `${config.chars.speek}` : ""}
          </h1>
          <BasicDisplay
            list={projects}
            tag={"Projects"}
            className={"margin-ud"}
          />
          <BasicDisplay
            list={summary}
            tag={"Roles & Responsibilities"}
            className={"margin-ud"}
          />
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
Experience.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Experience;
