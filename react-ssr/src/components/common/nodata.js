import {config} from "../../configs/config";


export default function NoData({text}) {
    return <>
        <div>
            <h3>{text || config.messages.NO_DATA} </h3>
        </div>
    </>
}
