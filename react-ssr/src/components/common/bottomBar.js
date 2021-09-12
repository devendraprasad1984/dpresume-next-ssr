import {useState} from "react";
import useAPI from "../../hooks/fetchHook";
import {config} from "../../configs/config";
import NoData from "./nodata";


const BottomBar = props => {
    const [links, setLinks] = useState([])
    const {data, loading, error} = useAPI(config.endpoints.links)

    const displayLinks = () => {
        if (links.length === 0) return null
        return links.map(link => {
            return <span>{link}</span>
        })
    }
    if (loading == true || links.length === 0) return <NoData/>
    return <>
        <div className='bottom flexbox'>
            {displayLinks()}
        </div>
    </>
}
export default BottomBar
