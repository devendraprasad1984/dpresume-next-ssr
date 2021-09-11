import Meta from "../components/common/meta";
import DisplayList from "../components/common/displayList";
import ArticleList from "../components/screens/articles/articleList";
import {server} from "../config";


export default function Home(props) {
    const {articles} = props
    // console.log('articles.js', articles.js)
    return (
        <div>
            <Meta/>
            <h1>Welcome to dpresume.com next.js app</h1>
            <ArticleList list={articles}/>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    return {
        props: {
            articles
        }
    }
}

// export const getStaticProps = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//     const articles = await res.json()
//     return {
//         props: {
//             articles
//         }
//     }
// }
