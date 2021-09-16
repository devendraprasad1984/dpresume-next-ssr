import React from "react";
import { config } from "../../configs/config";
import PropTypes from "prop-types";

const HtmlComponent = ({ text }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: `${config.chars.pointArrow} ${text}` }}
    />
  );
};
HtmlComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HtmlComponent;
