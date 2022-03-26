import PropTypes from "prop-types";
import React from "react";

import {config} from "../../configs/config";
// import useAPI from "../../hooks/useAPI";
import BasicDisplay from "../common/basicDisplay";
import NoData from "../common/nodata";
import OneLinerHeader from "../common/oneLinerHeader";
import HomeDemo from "./homeDemo";
// import CurrentlyWorkingAt from "./currentlyWorkingAt";
// import '../../webcomponents/counter'
// import {Validator} from "jsonschema";
// import Logger from "../../hoc/logger";
import useAPIWebWorker from "../../hooks/useAPIWebWorker";

// const validator = new Validator()
// const articleSchema = {
//     id: '/article-schema',
//     properties: {
//         title: {type: "string"},
//         upvotes: {types: "number"},
//         date: {type: 'string'}
//     },
//     required: ['title', 'upvotes', 'date']
// }
// const article = [
//     {
//         title: "helloF",
//         upvotes: 12,
//         date: "2021-01-02",
//     },
//     {
//         title: "ABC",
//         upvotes: 22,
//         date: "2020-08-10",
//     },
// ];
// validator.addSchema(articleSchema, '/article-schema')
// const isArticlesValid = validator.validate(article, articleSchema).valid
// console.log('article valid', isArticlesValid)

const Home = (props) => {
    const {data, loading, error} = useAPIWebWorker(config.endpoints.SUMMARY);
    if (loading) return <NoData text={config.messages.PLZ_WAIT}/>;
    if (error) return <NoData text={config.messages.ERROR}/>;
    // console.log('prop from HOC logger', props)
    return (
        <div>
            {/*<Article article={article}/>*/}
            {/*<my-counter count={10}/>*/}
            {/*<CurrentlyWorkingAt/>*/}
            {/*<TestUpDownHooks/>*/}
            {/*<TestUpDownConnect/>*/}
            <OneLinerHeader title={props.title}/>
            {data && <BasicDisplay list={data}/>}
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

export default React.memo(Home)
