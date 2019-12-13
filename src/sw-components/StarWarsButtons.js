import React from 'react';

export default function StarWarsButtons(props){
    const className = "main" + props.active ? " active" : "";

    return (
        <div id="sw-buttons" className={className}>
            {props.children}
        </div>
    )
}