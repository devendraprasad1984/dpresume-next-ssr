import {config} from "../../configs/config";
import React from 'react'
import BasicDisplay from "../common/basicDisplay";
import OneLinerHeader from "../common/oneLinerHeader";
import PropTypes from "prop-types";


const Experience = props => {
    let data = config.localdata.EXPERIENCE
    const display = () => {
        let keys = Object.keys(data)
        let values = Object.values(data)
        return keys.map((x, i) => {
            let {role, time, projects, speek, summary} = values[i]
            return <div key={'proj_exp_' + i}>
                <h1>{role} - {time} {speek ? `${config.chars.speek}` : ''}</h1>
                <BasicDisplay list={projects} tag={'Projects'} className={'margin-ud'}/>
                <BasicDisplay list={summary} tag={'Roles & Responsbilities'} className={'margin-ud'}/>
            </div>
        })
    }
    return <div className={'margin-ud'}>
        <OneLinerHeader title={props.title}/>
        {display()}
    </div>
}
export default Experience

Experience.propTypes = {
    title: PropTypes.string.isRequired
}

