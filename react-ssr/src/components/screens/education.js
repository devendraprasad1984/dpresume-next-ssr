import {config} from "../../configs/config";
import HTML from "../common/htmlComponent";
import HomeDemo from "./homeDemo";
import BasicDisplay from "../common/basicDisplay";


const Education= props=>{
    return <div><BasicDisplay list={config.localdata.EDUCATION}/></div>
}
export default Education
