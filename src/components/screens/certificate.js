import PropTypes from "prop-types";
import React from "react";

import {config} from "../../configs/config";
import useAPI from "../../hooks/useAPI";
import BasicDisplay from "../common/basicDisplay";
import NoData from "../common/nodata";
import OneLinerHeader from "../common/oneLinerHeader";

const Certificate = (props) => {
  const { data, loading, error } = useAPI(config.endpoints.CERT_DATA);
  if (loading) return <NoData text={config.messages.PLZ_WAIT} />;
  if (error) return <NoData text={config.messages.ERROR} />;

  return (
    <div>
      <OneLinerHeader title={props.title} />
      <BasicDisplay list={data} />
    </div>
  );
};
Certificate.propTypes = {
  title: PropTypes.string.isRequired,
};

export default React.memo(Certificate);
