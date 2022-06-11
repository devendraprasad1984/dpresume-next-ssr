import React from "react";

import {config} from "../../configs/config";

const HeaderInfo = (props) => {
  return (
    <div className="">
      <div className="row wrap">
        <div className="size30 xwhite handwritting">
          {config.name + " "}
          &nbsp;
            <a href={config.cvLink} target="_blank" className="bl size15 xred">download CV</a>
        </div>
        <div className="size30 handwritting xwhite">{config.rightTitle}</div>
      </div>
      <div className="row">
        <p className="size10 xwhite">{config.info}</p>
        <p className="size10 xwhite">{config.contactline}</p>
      </div>
      {/*<AppGlobalActions />*/}
      {/*<div>*/}
      {/*    <Input label="search" placeholder="dummy search..."/>*/}
      {/*</div>*/}
    </div>
  );
};
export default React.memo(HeaderInfo);
