import PropTypes from "prop-types";
import React from "react";

import { config } from "../../configs/config";
import useAPI from "../../hooks/useAPI";
import AppGlobalActions from "../common/appGlobalActions";
import BasicDisplay from "../common/basicDisplay";
import NoData from "../common/nodata";
import OneLinerHeader from "../common/oneLinerHeader";

import HomeDemo from "./homeDemo";

const Home = (props) => {
  const { data, loading, error } = useAPI(config.endpoints.SUMMARY);
  if (loading) return <NoData text={config.messages.PLZ_WAIT} />;
  if (error) return <NoData text={config.messages.ERROR} />;
  return (
    <div>
      <OneLinerHeader title={props.title} />
      <BasicDisplay list={data} />
      <AppGlobalActions />
      <HomeDemo />
    </div>
  );
};
Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
