import React from "react";
import config from "../../config";
import ListDisplay from "../../components/listDisplay";
import { getFromApiAsync } from "../../apis/get";
import HeaderLine from "../../core/headeline";

const Achievement = (props) => {
  return (
    <>
      <HeaderLine title={"Achievements"} />
      {/*<ListDisplay url={config.endpoints.achievements} />*/}

      <ListDisplay list={props.data} />
    </>
  );
};

export async function getStaticProps(context) {
  const { req, res } = context;
  const data = await getFromApiAsync(config.endpoints.achievements);
  return {
    props: {
      data,
    },
  };
}

export default Achievement;
