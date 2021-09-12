import {config} from "../../configs/config";


const HTML = ({text}) => {
    return <div dangerouslySetInnerHTML={{__html: `${config.chars.pointArrow} ${text}`}}/>
}
export default HTML
