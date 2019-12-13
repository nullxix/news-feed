import React, {useState} from "react";
import {Link} from 'react-router-dom';
import LinkObject from "./components/LinkObject";

export default function ISS(props){

    //http://api.open-notify.org/iss-now.json

    let [content, setContent] = useState('The ISS is missing!')
    async function getPos(){
        let data = await (fetch("http://api.open-notify.org/iss-now.json")
                        .then(res => res.json()))
        return data
    }

    async function printPos(){
        setContent("Looking for the ISS")
        let newContent = await getPos();
        console.log('---')
        console.log(newContent)
        setContent(
            <div className="lat-long">
                The ISS is at lat/long {newContent.iss_position.latitude} {newContent.iss_position.longitude}
            </div>
        )
    }

    return (
        <>
        <div id="iss">
            {content}
            <button id="iss-button" onClick={printPos}> Find that Space Station!</button>
        </div>
        <LinkObject to="/" label="NEEEEWWSS" position="left"></LinkObject>
        </>
    )
}