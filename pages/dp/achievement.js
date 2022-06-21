import React from "react";
import config from "../../config";
import ListDisplay from "../../components/listDisplay";
import style from "../../styles/common.module.scss";

const Achievement = () => {
  return (
    <>
      <h2 className={style.pageHeading}>Achievements</h2>
      <ListDisplay url={config.endpoints.achievements} />
    </>
  );
};

export default Achievement;
