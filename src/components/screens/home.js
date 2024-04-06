import PropTypes from "prop-types";
import React from "react";

import {config} from "../../configs/config";
import BasicDisplay from "../common/basicDisplay";
import NoData from "../common/nodata";
import OneLinerHeader from "../common/oneLinerHeader";
import HomeDemo from "./homeDemo";
import useAPIWebWorker from "../../hooks/useAPIWebWorker";

const Home = (props) => {
  const {
    data,
    loading,
    error,
    time,
    loadTime
  } = useAPIWebWorker(config.endpoints.SUMMARY);
  if (loading) {
    return <NoData text={config.messages.PLZ_WAIT}/>;
  }
  if (error) {
    return <NoData text={config.messages.ERROR}/>;
  }
  return (
      <div>
        <OneLinerHeader title={props.title}/>
        {data && <BasicDisplay list={data} time={time} loadTime={loadTime}/>}
        <HomeDemo/>
      </div>
  );
};
Home.propTypes = {
  title: PropTypes.string.isRequired,
};
Home.defaultProps = {
  title: "home"
};

export default React.memo(Home)
