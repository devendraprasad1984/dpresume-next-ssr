import {useEffect, useState} from "react";
import workerFactory from "../webworkers/webWorkerFactory_Builder";

const useAPIWebWorker = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        //mounting
        setLoading(true);
        let pullFromApiWorker = workerFactory()() //for UI performance, moving some api handling running in parallel other than main thread and
        // syncing up via event onmessage and postMessage of web worker
        pullFromApiWorker.postMessage({uri: url})
        pullFromApiWorker.onmessage = (res) => {
            let apiData= res.data
            if (apiData.error !== undefined) setError({error: apiData.error});
            else {
                setData(apiData.data === null ? [] : apiData.data);
                setLoading(false);
            }
        }
        return () => {
            //unmounting
            setLoading(false);
        };
    }, []);
    return {data, loading, error};
};
export default useAPIWebWorker;
