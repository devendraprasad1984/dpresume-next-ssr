import React from "react";
import config from "../../config";
import ListDisplay from "../../components/listDisplay";
import ShowDemo from "../../components/showDemo";
import style from "../../styles/common.module.scss";
import { getFromApiAsync } from "../../apis/get";

function Home(props) {
  return (
    <>
      <h2 className={style.pageHeading}>Home</h2>
      <ListDisplay list={props.data} />
      <ShowDemo />
    </>
  );
}
export default Home;
