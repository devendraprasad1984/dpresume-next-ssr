import React from 'react'
import MainApp from "../mainApp";
import config from "../../config";
import ListDisplay from "../../components/listDisplay";

const Achievement = (props) => {
    return <MainApp>
        <h2>Achievements</h2>
        <ListDisplay url={config.endpoints.achievements}/>
    </MainApp>
}

export default Achievement