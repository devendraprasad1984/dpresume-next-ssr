import {config} from "../../configs/config";
import BasicDisplay from "../common/basicDisplay";


const Experience = props => {
    let data = config.localdata.EXPERIENCE
    const display = () => {
        let keys = Object.keys(data)
        let values = Object.values(data)
        return keys.map((x, i) => {
            let {role, time, projects, speek, summary} = values[i]
            return <div key={'proj_exp_' + i}>
                <h1>{role} - {time}</h1>
                <BasicDisplay list={projects} tag={'Projects'} className={'margin-ud'}/>
                <BasicDisplay list={summary} tag={'Roles & Responsbilities'} className={'margin-ud'}/>
            </div>
        })
    }
    return <div className={'margin-ud'}>{display()}</div>
}
export default Experience
