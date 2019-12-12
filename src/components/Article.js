import React from 'react'

export default function Article(props){

    return (
        <article className="article"> 
            <div className="title-bar">
                <a href={props.article.url}>{props.article.title}</a> <br/>
            </div>
            <details>
                <summary className="grey"> {props.article.author} || {props.article.source.name} </summary>
                <div className="article-content"> {props.article.content} </div>
            </details>
        </article>
    )
}

Article.defaultProps = {

}

// source: {
//     id:
//     name:
// },
// author:
// title":
// "description":
// "url"
// "urlToImage"
// "publishedAt"
// "content"