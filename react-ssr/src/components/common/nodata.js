import {config} from "../../configs/config";


export default function NoData({text, type}) {
    const displayNoData = () => {
        return <h3>{text || config.messages.NO_DATA} </h3>
    }
    const display404 = () => {
        return <h2 className='xred'>Page Not Found</h2>
    }
    return <>
        <div>
            {type === '404' ? display404() : displayNoData()}
        </div>
    </>
}
