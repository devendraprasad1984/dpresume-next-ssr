import React from 'react'
import MainApp from "../mainApp";
import config from "../../config";
import ListDisplay from "../../components/listDisplay";
import style from "../../styles/common.module.scss";

const Certifications = (props) => {
    return <MainApp>
        <h2 className={style.pageHeading}>Certifications</h2>
        <ListDisplay url={config.endpoints.certifications}/>
    </MainApp>

}

export default Certifications