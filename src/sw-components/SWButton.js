import React from 'react';

export default function SWButton(props){
    let className = "sw-button" + (props.active ? " active": "");

    return (
            <div className={className} _id={props._id} onClick={props.onClick}> {props.children} </div>
    )
}