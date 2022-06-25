import React from "react";
import config from "../../config";
import ListDisplay from "../../components/listDisplay";
import HeaderLine from "../../core/headeline";

const Certifications = () => {
  return (
    <>
      <HeaderLine title={"Certifications"} />
      <ListDisplay url={config.endpoints.certifications} />
    </>
  );
};

export default Certifications;
