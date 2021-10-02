import React from "react"

export default function Article(props){
    const article=[{
        title:'hello',
        upvotes:12,
        date:'2021-01-02'
    },{
        title:'ABC',
        upvotes:22,
        date:'2020-08-10'
    }]
    const displayArticle=()=>{
        return article.map((x,i)=>{
            return <div key={'row'+i}>{x.title} - {x.upvotes} - {x.date}</div>
        })
    }
    return <div>
        <h2>Articles</h2>
        {displayArticle()}
    </div>
}