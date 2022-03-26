export default (message) => {
    const {uri} = message.data
    // const {uri, callback, msg, msgType} = message.data
    // console.log('message from worker', message.data)
    fetch(uri)
        .then((res) => {
            return res.json();
        })
        .then((data) => postMessage({data}))
        .catch((err) => postMessage({error: err}));
}
