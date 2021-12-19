import {useParams} from 'remix'

export default function(){
    const params=useParams()

    return <div>
        <h1>post by id: <span style={{color:'tomato'}}>{params.postid}</span></h1>
    </div>
}