import React from "react";
import curCompany from "../../assets/images/cur.png";
import viaCompany from "../../assets/images/gktr.png";

const CurrentlyWorkingAt = (props) => {
    return <div className='right'>
        <div className='row center'>
            <h2>currently working at</h2>
            <img src={curCompany} className=''/>
            <h2>via</h2>
            <img src={viaCompany} className=''/>
        </div>
    </div>
}

export default CurrentlyWorkingAt