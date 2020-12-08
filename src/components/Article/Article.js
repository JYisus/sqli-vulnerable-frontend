import React from 'react'
import "./Article.css"

const Article = ({data}) => (
    <article id="article">

        <h2>{data.title}</h2>
        <time className="publication-date">{data.datetime}</time>

        <p className="article-text">
            {data.text}
        </p>
    
    </article>
)

export default Article;