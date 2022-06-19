import React from 'react'
import config from "../../config";
import ListDisplay from "../../components/listDisplay";
import ShowDemo from "../../components/showDemo";
import style from "../../styles/common.module.scss";


function Home(props) {
    return <div>
        <h2 className={style.pageHeading}>Home</h2>
        <ListDisplay url={config.endpoints.summary}/>
        <ShowDemo/>
    </div>
}

export default Home
