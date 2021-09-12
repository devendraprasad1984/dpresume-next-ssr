import {config} from "../../configs/config";
import NoData from "../common/nodata";


const Home = props => {
    const summaryData = config.localdata.SUMMARY
    const displaySummary = () => {
        return summaryData.map((summary, index) => {
            return <div key={'summary-key-' + index} dangerouslySetInnerHTML={{__html: summary}}/>
        })
    }
    if (summaryData === undefined || summaryData.length === 0) return <NoData text={'please wait...'}/>
    return <div>
        <h1>home</h1>
        {displaySummary()}
    </div>
}
export default Home
