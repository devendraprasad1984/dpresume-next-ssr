import React from 'react'
import MainApp from "../mainApp";
import config from "../../config";
import ListDisplay from "../../components/listDisplay";
import style from "../../styles/common.module.scss";

const Education = (props) => {
    return <MainApp>
        <h2 className={style.pageHeading}>Education</h2>
        <ListDisplay url={config.endpoints.education}/>
    </MainApp>

}

export default Education