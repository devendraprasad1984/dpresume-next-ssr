import ArticleList from "../components/screens/articles/articleList";
import {server} from "../config";
import {BaseHeader} from "../config/fetchHeadBaseConfig";


export default function Home(props) {
    const {articles} = props
    // console.log('articles.js', articles.js)
    return (
        <div>
            <h1>Welcome to dpresume.com next.js app</h1>
            <ArticleList list={articles}/>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/articles`, BaseHeader)
    const articles = await res.json()
    return {
        props: {
            articles: articles.data || []
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


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.

// export async function getStaticProps() {
//     // Call an external API endpoint to get data.
//     // You can use any data fetching library
//
//     var res = await fetch(
//         'https://www.ajmadison.com/product3.0/packages.index.json.php?sku=RF28R7351SR'
//     );
//
//     var json = await res.json();
//
//     data = JSON.stringify(json);
//     console.log('data ', data);
//
//     return {
//         props: {
//             data: json,
//         },
//     };
// }
