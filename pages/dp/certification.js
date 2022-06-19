import React from 'react'
import MainApp from "../mainApp";
import config from "../../config";
import ListDisplay from "../../components/listDisplay";

const Certifications = (props) => {
    return <MainApp>
        <h2>Certifications</h2>
        <ListDisplay url={config.endpoints.certifications}/>
    </MainApp>

}

export default Certifications