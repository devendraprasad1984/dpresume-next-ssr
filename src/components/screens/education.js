import PropTypes from "prop-types";
import React from "react";

import { config } from "../../configs/config";
import BasicDisplay from "../common/basicDisplay";
import OneLinerHeader from "../common/oneLinerHeader";

const Education = (props) => {
  return (
    <div>
      <OneLinerHeader title={props.title} />
      <BasicDisplay list={config.localdata.EDUCATION} />
    </div>
  );
};
Education.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Education;
