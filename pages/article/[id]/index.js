import React from 'react'
import GO from "../../../components/common/go";
import {endpoints} from "../../../config";
import Meta from "../../../components/common/meta";
import {BaseHeader} from "../../../config/fetchHeadBaseConfig";


const article = ({post}) => {
    // const router = useRouter()
    // const {id} = router.query
    return <div>
        <Meta title={post.title || ''} description={post.body.substring(0, 100) || ''}/>
        <h1>{post.title || ''}</h1>
        <p>{post.body || ''}</p>
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
    const res = await fetch(`${endpoints.posts}/${context.params.id}`, BaseHeader)
    const data = await res.json()
    return {
        props: {
            post: data
        }
    }
}

//setup static paths
export const getStaticPaths = async () => {
    const res = await fetch(endpoints.posts, BaseHeader)
    let data = await res.json()
    const ids = data.map(row => row.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))
    return {
        paths, fallback: false
    }
}


export default article
