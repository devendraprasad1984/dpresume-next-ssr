import {config} from "../../configs/config";
import BasicDisplay from "../common/basicDisplay";


const Projects = props => {
    let data = config.localdata.PROJECTS
    const display = () => {
        let keys = Object.keys(data)
        let values = Object.values(data)
        return keys.map((name, i) => {
            let obj = values[i]
            let isString = typeof obj === "string"
            let isObject = typeof obj === "object"
            if (isObject) {
                let names = Object.keys(obj)
                let descVals = Object.values(obj)
                console.log(obj,'name', names, 'desc', descVals)
            }
            return <div key={'proj_' + i}>
                <h1>{name}</h1>
                {isString === true
                    ? <p>{obj}</p>
                    : <BasicDisplay list={[]} tag={'Description'} className={'margin-ud'}/>
                }
            </div>
        })
    }
    return <div className={'margin-ud'}>{display()}</div>
}
export default Projects
