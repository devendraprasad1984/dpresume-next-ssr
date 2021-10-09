import PropTypes from "prop-types";
import React from "react";

import { config } from "../../configs/config";
import useAPI from "../../hooks/useAPI";
import BasicDisplay from "../common/basicDisplay";
import NoData from "../common/nodata";
import OneLinerHeader from "../common/oneLinerHeader";

import Article from "./articles";
import HomeDemo from "./homeDemo";

const Home = (props) => {
  const article = [
    {
      title: "hello",
      upvotes: 12,
      date: "2021-01-02",
    },
    {
      title: "ABC",
      upvotes: 22,
      date: "2020-08-10",
    },
  ];

  const { data, loading, error } = useAPI(config.endpoints.SUMMARY);
  if (loading) return <NoData text={config.messages.PLZ_WAIT} />;
  if (error) return <NoData text={config.messages.ERROR} />;
  return (
    <div>
      {/*<Article article={article}/>*/}
      <OneLinerHeader title={props.title} />
      <BasicDisplay list={data} />
      <HomeDemo />
    </div>
  );
};
Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
