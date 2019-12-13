import React, {useState} from "react";
import LinkObject from "./components/LinkObject";
import StarWarsButtons from "./sw-components/StarWarsButtons"
import SWButton from "./sw-components/SWButton"
import SWLoadingBar from "./sw-components/SWLoadingBar"

export default function SW(props){

    const [bodyContent, setBodyContent] = useState("nothing to read here")

    async function getStarWars(req){
        let data = await fetch(`https://swapi.co/api/${req}`)
            .then(res => res.json())
        return data
    }




    async function printStarWars(req){
        
        //only one option can be active at a time
        let newOptions = buttonOptions.map( (option => {
            option.active = (option.name === req); 
            return option;
        }));

        setButtonOptions(newOptions)

        console.log("loading . . .")
        let n = 0
        let x = 10
        let theInt = setInterval(
            () => {console.log("loading-", n*x)
            n++}, x
        )

        setBodyContent(<SWLoadingBar/>)

        const data = await getStarWars(req);
        clearInterval(theInt)
        
        // setBodyContent( 
        //     getStarWars(req)
        // )
    }

    const buttonNames = ['people', 'planets', 'starships', 'vehicles', 'species']

    const [buttonOptions, setButtonOptions] = useState(
        buttonNames.map((name => {return {name, active: false}}))
    )
        
    return (
        <>
            <div id="sw">
                <StarWarsButtons> 
                    {buttonOptions.map(option => {
                        return (<SWButton active={option.active} onClick={() => { printStarWars(option.name)}}>
                                    {option.name}
                                </SWButton>)
                    })}
                </StarWarsButtons>
                <div>{bodyContent}</div>
            </div>
            <LinkObject to="/" label="NEEEEWWSS" position="right"></LinkObject>
        </>
    )
}