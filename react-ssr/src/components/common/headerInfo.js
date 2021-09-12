import {config} from "../../configs/config";


const HeaderInfo = props => {
    return <div className='margin-ud'>
        <div className='row'>
            <h1>{config.name}</h1>
            <h2>{config.rightTitle}</h2>
        </div>
        <p className='size10'>{config.info}</p>
    </div>
}
export default HeaderInfo
