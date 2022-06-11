import pullApiWorker from "./pullApiWorker";

const workerFactory = () => {
    //singleton pattern and closure, encapsulate, data isolation, data hiding, lexical scope binding
    let pullApiWebWorks = undefined
    const blob = new Blob([["onmessage =" + pullApiWorker.toString()]], {type: "text/javascript"});
    // const clearBlob = () => {
    //     URL.revokeObjectURL(blob)
    // }
    return function () {
        let tmp = (pullApiWebWorks === undefined ? new Worker(URL.createObjectURL(blob)) : pullApiWebWorks)
        return tmp
    }
}

export default workerFactory