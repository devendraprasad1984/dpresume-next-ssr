import React from "react";
import config from "../../config";
import ListDisplay from "../../components/listDisplay";
import style from "../../styles/common.module.scss";

const Education = () => {
  return (
    <>
      <h2 className={style.pageHeading}>Education</h2>
      <ListDisplay url={config.endpoints.education} />
    </>
  );
};

export default Education;
