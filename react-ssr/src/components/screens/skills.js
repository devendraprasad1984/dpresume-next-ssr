import {config} from "../../configs/config";
import BasicDisplay from "../common/basicDisplay";


const Skills = props => {
    const data = config.localdata.SKILLS
    const display = () => {
        let keys = Object.keys(data)
        let values = Object.values(data)
        return keys.map((name, i) => {
            return <div key={'skill-' + i}>
                <h2 className='xprimary'>{name}</h2>
                <BasicDisplay className='padding-rl' list={values[i]}/>
            </div>
        })
    }
    return <div>{display()} < /div>
}
export default Skills
