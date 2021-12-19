import {Link, useLoaderData} from "remix";
import {db} from '~/utils/db.server'

export const loader = async () => {
    const data = {
        posts: await db.post.findMany({
            take: 100,
            select: {id: true, title: true, createdAt: true},
            orderBy: {createdAt: 'desc'}
        })
    }
    // console.log('server loader test', data)
    return data
}

export default function _index() {
    const {posts} = useLoaderData()

    const displayPosts = () => {
        return <>
            <div className='page-header'>
                <h2>posts</h2>
                <Link to={'/posts/new'} className='btn'>New Post</Link>
            </div>
            <ul className={'posts-list'}>
                {posts.map(_ => <li key={_.id}>
                    <span style={{color: 'gray'}}>{_.id} - {_.title}</span> - <span style={{color: 'tomato'}}>{_.createdAt}</span>
                </li>)}
            </ul>
        </>
    }
    return (<div>
        <h1 style={{color: 'mediumseagreen'}}>hello this is posts home</h1>
        {displayPosts()}
    </div>)
}