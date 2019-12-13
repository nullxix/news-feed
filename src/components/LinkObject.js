import React from "react";
import {Link} from 'react-router-dom';

export default function LinkObject(props){
    let className="link-object position-" + props.position; 
    return (
        <div className="link-object-container">       
            <div className={className}>
                <Link className="link-literal" to={props.to}>{props.label}</Link>
            </div>
        </div>
    )
}

//to
//label
//position 'left' 'right'