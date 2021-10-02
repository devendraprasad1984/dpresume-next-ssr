import PropTypes from "prop-types";
import React from "react";

import HtmlComponent from "./htmlComponent";

const BasicDisplay = ({ list, tag, className }) => {
  const display = (data) => {
    return data.map((row, index) => {
      return (
        <div key={"key-" + index}>
          <HtmlComponent text={row} />
        </div>
      );
    });
  };

  const displayByList = () => {
    if (list === undefined) return null;
    if (list.length === 0) return null;
    return display(list);
  };
  return (
    <div className={className}>
      <div className="bl xprimary">{tag || ""}</div>
      {displayByList()}
    </div>
  );
};
BasicDisplay.propTypes = {
  list: PropTypes.array.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
};

export default BasicDisplay;
