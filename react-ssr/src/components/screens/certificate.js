import {config} from "../../configs/config";
import BasicDisplay from "../common/basicDisplay";


const Certificate = props => {
    return <div><BasicDisplay list={config.localdata.CERT_DATA}/></div>
}
export default Certificate
