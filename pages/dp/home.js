import React from 'react'
import config from "../../config";
import ListDisplay from "../../components/listDisplay";
import ShowDemo from "../../components/showDemo";


function Home(props) {
    return <div>
        <h2>Home</h2>
        <ListDisplay url={config.endpoints.summary}/>
        <ShowDemo/>
    </div>
}

export default Home
