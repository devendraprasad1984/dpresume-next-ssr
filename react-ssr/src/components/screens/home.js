import {config} from "../../configs/config";
import HomeDemo from "./homeDemo";
import BasicDisplay from "../common/basicDisplay";


const Home = props => {
    return <div>
        <BasicDisplay list={config.localdata.SUMMARY}/>
        <HomeDemo/>
    </div>
}
export default Home
