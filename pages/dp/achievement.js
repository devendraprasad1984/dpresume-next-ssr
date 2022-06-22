import React from "react";
import config from "../../config";
import ListDisplay from "../../components/listDisplay";
import style from "../../styles/common.module.scss";
import { getFromApiAsync } from "../../apis/get";

const Achievement = (props) => {
  return (
    <>
      <h2 className={style.pageHeading}>Achievements</h2>
      {/*<ListDisplay url={config.endpoints.achievements} />*/}

      <ListDisplay list={props.data} />
    </>
  );
};

export async function getStaticProps() {
  const data = await getFromApiAsync(config.endpoints.achievements);
  return {
    props: {
      data,
    },
  };
}

export default Achievement;
