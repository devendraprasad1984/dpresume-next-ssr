import PropTypes from "prop-types";
import React from "react";

import { config } from "../../configs/config";
import BasicDisplay from "../common/basicDisplay";
import OneLinerHeader from "../common/oneLinerHeader";

import HomeDemo from "./homeDemo";

const Home = (props) => {
  return (
    <div>
      <OneLinerHeader title={props.title} />
      <BasicDisplay list={config.localdata.SUMMARY} />
      <HomeDemo />
    </div>
  );
};
Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
