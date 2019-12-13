import React from 'react'

export default function Input(props){
    const countryCodes = "ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za"
        .split(" ")
    const categories = props.categories

    return (
        <div id="input"> 
        <form onSubmit={props.handleSubmit}>
            <div id="checkbox-container">
                {categories.map((category, i) => {
                    let className = "checkbox-wrapper"
                     if(category.active) 
                        className += " active";

                    return (
                        <div 
                            key={`checkbox-${i}`} 
                            className={className}
                            onClick={() => {
                                props.handleChange(category._id, "category")
                            }}
                        >
                            <span className="checkbox"> {category.name} </span>
                        </div>
                    )
                })}
            </div>

            <button> Let's do this </button>  
        </form>
        </div>
    )
}

//   API STUFF
//
//          business entertainment general health science sports technology
//          