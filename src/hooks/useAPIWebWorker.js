import {useEffect, useState} from "react";
import workerFactory from "../webworkers/webWorkerFactory_Builder";

const pullFromApiWorker = workerFactory()() //for UI performance, moving some api handling running in parallel other than main thread and
// syncing up via event onmessage and postMessage of web worker

const perfData = window.performance.timing;
const _win = window
const useAPIWebWorker = (url) => {
    const [data, setData] = useState([]);
    const [time, setTime] = useState('');
    const [loadTime, setLoadtime] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (!data) return
        //mounting
        setLoading(true);
        let start = _win.performance.now()
        pullFromApiWorker.postMessage({uri: url})
        pullFromApiWorker.onmessage = (res) => {
            const pageLoadTime = Math.floor(perfData.loadEventEnd - perfData.navigationStart)
            let apiData = res.data
            let timeTaken = Math.floor(_win.performance.now() - start)
            if (apiData.error !== undefined) {
                setError({error: apiData.error});
                setTime(t => timeTaken)
                setLoadtime(t => pageLoadTime)
            } else {
                setData(apiData.data === null ? [] : apiData.data);
                setLoading(false);
                setTime(t => timeTaken)
                setLoadtime(t => pageLoadTime)
            }
        }
        return () => {
            //unmounting
            setLoading(false);
        };
    }, []);
    return {data, loading, error, time, loadTime};
};
export default useAPIWebWorker;
