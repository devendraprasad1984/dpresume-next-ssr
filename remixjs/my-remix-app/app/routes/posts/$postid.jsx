import {Link, redirect, useLoaderData} from 'remix'
import {db} from '~/utils/db.server'

export const loader = async ({params}) => {
    const post = await db.post.findUnique({where: {id: params.postid}})
    if (!post) throw new Error(`post for ${params.id} not found`)
    return {post}
}

export const action = async ({request, params}) => {
    const form = await request.formData()
    if (form.get('_method') === 'delete') {
        const post = await db.post.findUnique({where: {id: params.postid}})
        if (!post) throw new Error(`post for ${params.id} not found`)
        await db.post.delete({where: {id: params.postid}})
        return redirect('/posts')
    }
}

export default function () {
    const {post} = useLoaderData()
    return <div>
        <div className='page-header'>
            <h1><span style={{color: 'tomato'}}>{post.id}</span> - {post.title}</h1>
            <Link to={'/posts'} className="btn btn-reverse">back</Link>
        </div>
        <p>{post.body}</p>

        <div className="page-footer">
            <form method="post">
                <input type="hidden" name='_method' value='delete'/>
                <button className="btn btn-delete">delete</button>
            </form>
        </div>
    </div>
}