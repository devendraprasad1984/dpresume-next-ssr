import {config} from "../configs/config";
import pullApiWorker from '../webworkers/pullApiWorker'

const workerFactory = () => {
    //singleton pattern and closure, encapsulate, data isolation, data hiding, lexical scope binding
    let pullApiWebWorks = undefined
    const blob = new Blob([["onmessage =" + pullApiWorker.toString()]], {type: "text/javascript"});
    const clearBlob = () => {
        URL.revokeObjectURL(blob)
    }
    return function () {
        let tmp = (pullApiWebWorks === undefined ? new Worker(URL.createObjectURL(blob)) : pullApiWebWorks)
        return tmp
    }
}

const pullApiWebWorks = workerFactory()()
export default function get(uri, callback) {
    // console.log('pull worker', pullApiWebWorks)
    pullApiWebWorks.postMessage({uri,msgType: config.enums.WorkerEnums.GET_DATA_FROM_API, msg: config.enums.WorkerEnums.GET_DATA_FROM_API})
    // const header = config.header();
    //asynchronous task always run in different thread
    //practing worker send/receive events, runs in diff thread, used for UI performance
    pullApiWebWorks.onmessage=(res)=>{
        console.log('from worker response',res.data)
        callback(res.data)
    }
}
