import React from 'react'
import MainApp from "../mainApp";
import config from "../../config";
import ListDisplay from "../../components/listDisplay";

const Education = (props) => {
    return <MainApp>
        <h2>Education</h2>
        <ListDisplay url={config.endpoints.education}/>
    </MainApp>

}

export default Education