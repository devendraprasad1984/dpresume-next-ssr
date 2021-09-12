import {config} from "../../configs/config";
import HomeDemo from "./homeDemo";


const Home = props => {
    const summaryData = config.localdata.SUMMARY
    const displaySummary = () => {
        return summaryData.map((summary, index) => {
            return <div key={'summary-key-' + index} dangerouslySetInnerHTML={{__html: summary}}/>
        })
    }

    return <div>
        {displaySummary()}
        <HomeDemo/>
    </div>
}
export default Home
