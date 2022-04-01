import PropTypes from "prop-types";
import React from "react";

import {config} from "../../configs/config";
import useAPI from "../../hooks/useAPI";
import BasicDisplay from "../common/basicDisplay";
import NoData from "../common/nodata";
import OneLinerHeader from "../common/oneLinerHeader";

const Skills = (props) => {
  const { data, loading, error,time } = useAPI(config.endpoints.SKILLS);

  const display = () => {
    let keys = Object.keys(data);
    let values = Object.values(data);
    return keys.map((name, i) => {
      return (
        <div key={"skill-" + i}>
          <h2 className="xprimary">{name}</h2>
          <BasicDisplay className="padding-rl" list={values[i]}  time={time}/>
        </div>
      );
    });
  };

  if (loading) return <NoData text={config.messages.PLZ_WAIT} />;
  if (error) return <NoData text={config.messages.ERROR} />;
  return (
    <div>
      <OneLinerHeader title={props.title} />
      {display()}
    </div>
  );
};
export default React.memo(Skills);

Skills.propTypes = {
  title: PropTypes.string.isRequired,
};
