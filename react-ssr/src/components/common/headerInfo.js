import {config} from "../../configs/config";


const HeaderInfo = props => {
    return <>
        <div>
            <h1>{config.name}</h1>
            <h2>{config.rightTitle}</h2>
        </div>
        <div>{config.info}</div>
    </>
}
export default HeaderInfo
