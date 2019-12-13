import React from 'react';

export default function SWButton(props){
    return (
            <div className="sw-button" _id={props._id} onClick={props.onClick}> {props.children} </div>
    )
}