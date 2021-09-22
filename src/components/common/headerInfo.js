import React from "react";

import { config } from "../../configs/config";

import Input from "./input";

const HeaderInfo = (props) => {
  return (
    <div className="margin-ud">
      <div className="row">
        <h1 className="size30">
          {config.name + " "}
          <a href={config.cvLink} target="_blank" className="bl size30 xred">
            {config.chars.down}
          </a>
        </h1>
        <h2>{config.rightTitle}</h2>
      </div>
      <div className="row xviolet">
        <p className="size10">{config.info}</p>
        <p className="size10">{config.contactline}</p>
      </div>
      {/*<div>*/}
      {/*    <Input label="search" placeholder="dummy search..."/>*/}
      {/*</div>*/}
    </div>
  );
};
export default HeaderInfo;
