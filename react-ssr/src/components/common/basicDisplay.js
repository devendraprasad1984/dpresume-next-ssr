import React from "react";
import HtmlComponent from "./htmlComponent";
import PropTypes from "prop-types";

const BasicDisplay = ({ list, tag, className }) => {
  const display = () => {
    if (list === undefined) return null;
    if (list.length === 0) return null;
    return list.map((row, index) => {
      return (
        <div key={"key-" + index}>
          <HtmlComponent text={row} />
        </div>
      );
    });
  };
  return (
    <div className={className}>
      <div className="bl xprimary">{tag || ""}</div>
      {display()}
    </div>
  );
};
BasicDisplay.propTypes = {
  list: PropTypes.array.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
};

export default BasicDisplay;
