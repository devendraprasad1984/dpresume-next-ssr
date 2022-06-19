import React from 'react'
import config from "../../config";
import ListDisplay from "../../components/listDisplay";


function Home(props) {
    return <div>
        <h2>Home</h2>
        <ListDisplay url={config.endpoints.summary}/>
    </div>
}

export default Home
