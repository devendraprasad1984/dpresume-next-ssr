import React from "react";
import config from "../../config";
import ListDisplay from "../../components/listDisplay";
import HeaderLine from "../../core/headeline";

const Education = () => {
  return (
    <>
      <HeaderLine title={"Education"} />
      <ListDisplay url={config.endpoints.education} />
    </>
  );
};

export default Education;
