import PropTypes from "prop-types";
import React from "react";

import { config } from "../../configs/config";
import useAPI from "../../hooks/useAPI";
import BasicDisplay from "../common/basicDisplay";
import NoData from "../common/nodata";
import OneLinerHeader from "../common/oneLinerHeader";

const Achievement = (props) => {
  const { data, loading, error } = useAPI(config.endpoints.ACHIEVMENT);

  if (loading) return <NoData text={config.messages.PLZ_WAIT} />;
  if (error) return <NoData text={config.messages.ERROR} />;
  return (
    <div>
      <OneLinerHeader title={props.title} />
      <BasicDisplay list={data} />
    </div>
  );
};
Achievement.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Achievement;
