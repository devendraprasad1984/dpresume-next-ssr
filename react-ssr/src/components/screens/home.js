import React from 'react'
import {config} from "../../configs/config";
import HomeDemo from "./homeDemo";
import BasicDisplay from "../common/basicDisplay";
import OneLinerHeader from "../common/oneLinerHeader";
import PropTypes from "prop-types";


const Home = props => {
    return <div>
        <OneLinerHeader title={props.title}/>
        <BasicDisplay list={config.localdata.SUMMARY}/>
        <HomeDemo/>
    </div>
}
export default Home

Home.propTypes = {
    title: PropTypes.string.isRequired
}
