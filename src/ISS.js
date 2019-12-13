import React from "react";
import {Link} from 'react-router-dom';
import LinkObject from "./components/LinkObject";

export default function ISS(props){
    return (
        <>
        <div>
            I'M THE ISS
        </div>
        <LinkObject to="/" label="NEEEEWWSS" position="left"></LinkObject>
        </>
    )
}