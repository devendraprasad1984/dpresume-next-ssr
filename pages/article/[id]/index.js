import React from 'react'
import GO from "../../../components/common/go";
import {server} from "../../../config";
import Meta from "../../../components/common/meta";
import {BaseHeader} from "../../../config/fetchHeadBaseConfig";


const article = ({article}) => {
    // const router = useRouter()
    // const {id} = router.query
    return <div>
        <Meta title={article.title} description={article.excerpt}/>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br/>
        <GO text={'go back'} where={'/'}/>
    </div>
}

//render and fetches every time from server
// export const getServerSideProps = async (context) => {
//     const {id} = context.params
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     let articleById = await res.json()
//     return {
//         props: {
//             articleById
//         }
//     }
// }

//getStatic Props
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`, BaseHeader)
    const article = await res.json()
    return {
        props: {
            article: article.data || []
        }
    }
}

//setup static paths
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`, BaseHeader)
    let allArticles = await res.json()
    const ids = allArticles.data.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))
    return {
        paths, fallback: false
    }
}


export default article
