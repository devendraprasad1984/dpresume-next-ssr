import {Link, useLoaderData} from "remix";

export const loader = () => {
    const data = {
        posts: [{id: 1, title: 'title1', body: 'body'}, {id: 2, title: 'title2', body: 'body2'}, {id: 3, title: 'title3', body: 'body3'}]
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
                {posts.map(_ => <li key={_.id}>{_.id} - {_.title} - {_.body}</li>)}
            </ul>
        </>
    }
    return (<div>
        <h1 style={{color: 'mediumseagreen'}}>hello this is posts home</h1>
        {displayPosts()}
    </div>)
}