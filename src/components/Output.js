import React, {useState} from "react"
import Article from './Article'

export default function Output(props){
    const generateArticles = () => {

    }
    
    return (
        <div id="output">
            {!props.areArticlesGenerated ? 
            <div className="grey"> nothing to read here </div>
            : (
                <>
                    {props.articles.map((article, i)=> {
                        return <Article key={`article-${i}`} article={article}/>
                    })}
                </>
            )} 
             
        </div>
        
    )
}

Output.defaultProps = {
    articles: [
        {text: "asdasjdhaskdjas"},
        {text: "asda3sdsaas"},
        {text: "asda3232sjdhaskdjas"},
        {text: "asdasjgdsgdsgsdsdhaskdjas"},
        {text: "asdasjdh53252askdjas"},
    ],
}