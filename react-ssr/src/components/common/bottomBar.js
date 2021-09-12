import {config} from "../../configs/config";
import NoData from "./nodata";


const BottomBar = props => {
    const linkData = config.localdata.LINKS

    const displayLinks = () => {
        const linksKey = Object.keys(linkData)
        const linksValues = Object.values(linkData)
        if (linksKey.length === 0) return null
        return linksKey.map((link, index) => {
            return <a className='btn' href={linksValues[index]} target='_blank' key={'link-key-' + index}>{link}</a>
        })
    }
    if (linkData.length === 0) return <NoData/>
    return <>
        <div className='bottom right margin-ud'>
            {displayLinks()}
        </div>
    </>
}
export default BottomBar
