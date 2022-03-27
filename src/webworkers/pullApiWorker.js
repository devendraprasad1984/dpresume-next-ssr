export default (message) => {
    const {uri} = message.data
    let start=new Date().getMilliseconds()
    let endTime=()=>(new Date().getMilliseconds() - start)
    // const {uri, callback, msg, msgType} = message.data
    // console.log('message from worker', message.data)
    fetch(uri)
        .then((res) => {
            return res.json();
        })
        .then((data) => postMessage({data, time: endTime()}))
        .catch((err) => postMessage({error: err, time: endTime()}));
}
