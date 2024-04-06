import React from "react";
import HtmlComponent from "./htmlComponent";

const GridVanila = (props) => {
  const {
    gridClass = "flexRow",
    data = [],
    exclude = [],
    orderedColumns = [],
    title,
    style,
    columnStyle,
    columnFunctions,
    hasAction,
    Actions,
    hasSearch,
    Search,
    actionsCondition,
  } = props;

  const xstyle = {
    ...style,
    overflow: "auto",
    position: "relative",
  };

  if (data.length === 0) return null;

  const keys = Object.keys(data[0]);
  const filteredKeys = !exclude
    ? keys
    : keys.filter((key) => exclude.indexOf(key) === -1);
  const displayCols =
    orderedColumns.length === 0 ? filteredKeys : orderedColumns;

  const getColumnStyle = (col) => {
    return columnStyle !== undefined ? columnStyle[col] || {} : {};
  };
  const getColumnFunction = (col, val) => {
    if (!columnFunctions) return <HtmlComponent text={val} arrow={false} />;
    const func = columnFunctions[col];
    return !func ? val : columnFunctions[col](val);
  };

  return (
    <React.Fragment>
      <div className="size15">{title}</div>
      {hasSearch && <Search />}
      {/*main grid container*/}
      <div className="" style={xstyle}>
        {/*grid row header container*/}
        <div className={`${gridClass} gridLine size12 bl`}>
          {displayCols.map((col, j) => {
            return (
              <span
                key={"col" + j}
                className="cell"
                style={getColumnStyle(col)}
              >
                {col}
              </span>
            );
          })}
          {hasAction === true && (
            <div className="wid20 row">
              <span>...</span>
            </div>
          )}
        </div>
        {/*grid row container*/}
        <div>
          {data.map((row, index) => {
            return (
              <div
                key={"row" + index}
                className={`${gridClass} gridLine size12`}
              >
                {displayCols.map((col, j) => {
                  return (
                    <span
                      key={"col" + j}
                      style={getColumnStyle(col)}
                      className="cell"
                    >
                      {getColumnFunction(col, row[col])}
                    </span>
                  );
                })}
                {hasAction === true && (
                  <div className="row wid20">
                    <Actions row={row} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default GridVanila;
