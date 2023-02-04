import React from "react";

import { config } from "../../configs/config";
import Badges from "./badges";

const HeaderInfo = (props) => {
  return (
    <div className="">
      <div className="row wrap">
        <div className="size30 handwritting">
          {config.name + " "}
        </div>
        <div className="size30 handwritting">{config.rightTitle}</div>
      </div>
      <div className="row">
        <p className="size10">{config.info}</p>
        <p className="size10">{config.contactline}</p>
      </div>
      <div className="wid100">
        <Badges
          list={[
            "ReactJs",
            "Html5",
            "Javascript",
            "Python",
            "Django",
            "NodeJs",
            "RDBMS",
            "CICD",
            "JWT",
            "DevOps",
            "ELK",
            "Argon / Kafka",
            "Cloud Computing",
            "Stream-Chat-React / Twilio",
            "Php7",
          ]}
        />
      </div>
      {/*<AppGlobalActions />*/}
      {/*<div>*/}
      {/*    <Input label="search" placeholder="dummy search..."/>*/}
      {/*</div>*/}
    </div>
  );
};
export default React.memo(HeaderInfo);
