import {config} from "../../configs/config";


const HeaderInfo = props => {
    return <div className='margin-ud'>
        <div className='row'>
            <h1 className='size30'>{config.name}</h1>
            <h2>{config.rightTitle}</h2>
        </div>
        <div className='row xviolet'>
            <p className='size10'>{config.info}</p>
            <p className='size10'>{config.contactline}/>}</p>
        </div>
    </div>
}
export default HeaderInfo
