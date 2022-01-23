import PropTypes from "prop-types";
import React from "react";

import {config} from "../../configs/config";
import useAPI from "../../hooks/useAPI";
import BasicDisplay from "../common/basicDisplay";
import NoData from "../common/nodata";
import OneLinerHeader from "../common/oneLinerHeader";
import HomeDemo from "./homeDemo";
// import CurrentlyWorkingAt from "./currentlyWorkingAt";
// import '../../webcomponents/counter'

const Home = (props) => {
    const article = [
        {
            title: "helloF",
            upvotes: 12,
            date: "2021-01-02",
        },
        {
            title: "ABC",
            upvotes: 22,
            date: "2020-08-10",
        },
    ];
    const {data, loading, error} = useAPI(config.endpoints.SUMMARY);
    if (loading) return <NoData text={config.messages.PLZ_WAIT}/>;
    if (error) return <NoData text={config.messages.ERROR}/>;

    return (
        <div>
            {/*<Article article={article}/>*/}
            {/*<my-counter count={10}/>*/}
            {/*<CurrentlyWorkingAt/>*/}
            <OneLinerHeader title={props.title}/>
            <BasicDisplay list={data}/>
            <HomeDemo/>
        </div>
    );
};
Home.propTypes = {
    title: PropTypes.string.isRequired,
};
Home.defaultProps = {
    title: 'home'
}

export default Home;
