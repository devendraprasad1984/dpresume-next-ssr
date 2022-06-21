import React from "react";
import config from "../../config";
import ListDisplay from "../../components/listDisplay";
import style from "../../styles/common.module.scss";

const Certifications = () => {
  return (
    <>
      <h2 className={style.pageHeading}>Certifications</h2>
      <ListDisplay url={config.endpoints.certifications} />
    </>
  );
};

export default Certifications;
