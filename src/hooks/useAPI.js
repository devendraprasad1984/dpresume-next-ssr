import {useEffect, useState} from "react";

import get from "../apis";
import {calculatePerformance} from "../configs/utils";

const useAPI = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [time, setTime] = useState('');
  // const [loadTime, setLoadtime] = useState('');

  useEffect(() => {
    //mounting
    setLoading(true);
    let _perf = calculatePerformance()
    get(url, (res) => {
      let timeTaken = Math.floor(_perf())
      if (res.error !== undefined) {
        setError({error: res.error})
        setTime(t => timeTaken)
      }
      else {
        setData(res.data === null ? [] : res.data);
        setTime(t => timeTaken)
        setLoading(false);
      }
    });
    return () => {
      //unmounting
      setLoading(false);
    };
  }, []);
  return { data, loading, error, time };
};
export default useAPI;
