import React from "react";

import { config } from "../../configs/config";

import AppGlobalActions from "./appGlobalActions";

const HeaderInfo = (props) => {
  return (
    <div className="">
      <div className="row">
        <h1 className="size30 handwritting">
          {config.name + " "}
          &nbsp;
            {/*<a href={config.cvLink} target="_blank" className="bl size15 xred">download CV</a>*/}
        </h1>
        <h2 className="size30 handwritting">{config.rightTitle}</h2>
      </div>
      <div className="row xviolet">
        <p className="size10">{config.info}</p>
        <p className="size10">{config.contactline}</p>
      </div>
      <AppGlobalActions />
      {/*<div>*/}
      {/*    <Input label="search" placeholder="dummy search..."/>*/}
      {/*</div>*/}
    </div>
  );
};
export default HeaderInfo;
