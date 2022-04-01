import {useEffect, useState} from "react";

import get from "../apis";
import {calculatePerformance} from "../configs/utils";

const useAPI = (url) => {
    let {runtime, perftime} = calculatePerformance() //closure
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [time, setTime] = useState('');
    // const [loadTime, setLoadtime] = useState('');

    useEffect(() => {
        //mounting
        setLoading(true);
        get(url, (res) => {
            if (res.error !== undefined) {
                setError({error: res.error})
                setTime(t => runtime())
            } else {
                setData(res.data === null ? [] : res.data);
                setTime(t => runtime())
                setLoading(false);
            }
        });
        return () => {
            //unmounting
            setLoading(false);
        };
    }, []);
    return {data, loading, error, time};
};
export default useAPI;
