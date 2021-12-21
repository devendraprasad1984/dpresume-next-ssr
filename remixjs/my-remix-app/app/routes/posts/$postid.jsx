import {Link, useLoaderData, useParams} from 'remix'
import {db} from '~/utils/db.server'

export const loader = async ({params}) => {
    const post = await db.post.findUnique({where: {id: params.postid}})
    if (!post) throw new Error(`post for ${params.id} not found`)
    return {post}
}


export default function () {
    const {post} = useLoaderData()
    return <div>
        <div className='page-header'>
            <h1><span style={{color: 'tomato'}}>{post.id}</span> - {post.title}</h1>
            <Link to={'/posts'} className="btn btn-reverse">back</Link>
        </div>
        <p>{post.body}</p>
    </div>
}