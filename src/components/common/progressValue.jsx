import React, {useEffect, useState} from 'react'

const ProgressValue = props => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        let progressBarHandler = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const curScroll = `${totalScroll / windowHeight}`;
            setScroll(curScroll)
        }
        document.addEventListener('scroll', progressBarHandler)
        return () => window.removeEventListener("scroll", progressBarHandler);
    })


    return (
        <div id='progressBarContainer'>
            <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
        </div>
    )
}

export default ProgressValue
