import PropTypes from "prop-types";
import React from "react";

import { config } from "../../configs/config";
import sanitizeHtml from "sanitize-html-react";

const HtmlComponent = ({ text, children, arrow = true }) => {
  if (!text) return null;
  //sanitise this text and children here to avoid potential XSS
  let _htmlSanitized = sanitizeHtml(text || children);
  return (
    <div
        className='linegap'
      dangerouslySetInnerHTML={{
        __html: ` ${
          arrow === true ? config.chars.pointArrow : ""
        } ${_htmlSanitized}`,
      }}
    />
  );
};
HtmlComponent.propTypes = {
  text: PropTypes.string,
};

export default React.memo(HtmlComponent);
