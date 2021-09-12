import {config} from "../../configs/config";


const HomeDemo = () => {
    const demoPageContent = () => {
        let res = config.localdata.HOME_DEMO
        let {links, youtube} = res
        let printLinks = () => links.map(x => {
            let num = Math.floor(Math.random() * config.colors.length)
            let color = config.colors[num] || 'white'
            return <a class="white pcenter" target="_blank" href="${x.href}" class="mcard">
                <span style={{color: color}} class="center">${x.name}</span>
            </a>
        })

        let printYouTubeVideos = () => youtube.map(x => {
            let vtag = <span>
                <h2>{x.name}</h2>
                <iframe width="100%" height="95%" src={x.src} frameborder="0" allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen"
                        msallowfullscreen="msallowfullscreen"
                        oallowfullscreen="oallowfullscreen"
                        webkitallowfullscreen="webkitallowfullscreen"></iframe>
                </span>
            return vtag
        })

        return <div className='margin-ud'>
            <h1>Demo Examples</h1>
            <div class="flexbox cards">{printLinks()}</div>
            <br/><br/>
            <h1>few Video Demo</h1>
            <div class="flexbox-video video-cards">{printYouTubeVideos()}</div>
        </div>
    }

    return <div>{demoPageContent()}</div>
}
export default HomeDemo
