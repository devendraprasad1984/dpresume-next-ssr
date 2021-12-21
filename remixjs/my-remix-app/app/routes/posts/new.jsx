import {Link, redirect} from "remix";
import {db} from '~/utils/db.server'

export const action = async ({request}) => {
    const form = await request.formData()
    const title = form.get('title')
    const body = form.get('body')
    const fields = {title, body}
    console.log('action from remix request', fields)
    //@submit to db
    const post = await db.post.create({data: fields})
    // return redirect(`/posts/${post.id}`)
    return redirect(`/posts`)
}
const backBtn = <Link to='/posts' className='btn btn-reverse'>Back</Link>

// this can go to root as well, precentence will be given to this ErrorBoundary function
export function ErrorBoundary({error}) {
    console.log(error)
    return <div>
        <h2 style={{color: 'tomato'}}>Error while submitting</h2>
        <p>{error.message}</p>
        {backBtn}
    </div>
}

export default function () {
    return <>
        <div className='page-header'>
            <h2>Create New Posts - nested routes</h2>
            {backBtn}
        </div>
        <div className="page-content">
            <form method='POST'>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name={'title'} id={'title'}/>
                </div>
                <div className="form-control">
                    <label htmlFor="body">Body</label>
                    <textarea name={'body'} id={'body'}/>
                </div>
                <button className="btn btn-block" type='submit'>Save</button>
            </form>
        </div>
    </>
}