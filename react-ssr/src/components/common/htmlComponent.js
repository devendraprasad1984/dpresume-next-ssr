import {config} from "../../configs/config";


const HtmlComponent = ({text}) => {
    return <div dangerouslySetInnerHTML={{__html: `${config.chars.pointArrow} ${text}`}}/>
}
export default HtmlComponent
