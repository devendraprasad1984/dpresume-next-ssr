import React from "react";
import config from "../../config";
import ListDisplay from "../../components/listDisplay";
import ShowDemo from "../../components/showDemo";
import style from "../../styles/common.module.scss";

function Home() {
  return (
    <>
      <h2 className={style.pageHeading}>Home</h2>
      <ListDisplay url={config.endpoints.summary} />
      <ShowDemo />
    </>
  );
}

export default Home;
