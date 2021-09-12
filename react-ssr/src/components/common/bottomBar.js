import {useEffect, useState} from "react";


const BottomBar = props => {
    const [links, setLinks] = useState([])
    useEffect(() => {
        //on mounting - componentDidMount
        return () => {
            //on unmounting - componentWillUnmount
        }
    })

    const displayLinks = () => {
        if(links.length===0) return null
        return links.map(link=>{
            return <span>{link}</span>
        })
    }
    return <>
        <div className='bottom flexbox'>
            {displayLinks()}
        </div>
    </>
}
export default BottomBar
