import React, {useState} from "react";
import LinkObject from "./components/LinkObject";
import StarWarsButtons from "./sw-components/StarWarsButtons";
import SWButton from "./sw-components/SWButton";
import SWLoadingBar from "./sw-components/SWLoadingBar";
import SWContent from "./sw-components/SWContent";

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

        let data = await getStarWars(req);
        clearInterval(theInt)

        data = data.results
        console.log(typeof data)
        console.log(data)
        //data = data.slice(0, 11) //setting a max data . . . thing
        
        const newBodyContent = data.map(datum => {
            const entries = Object.entries(datum)
            return (
                <SWContent>
                    {Array(3).fill().map((ar, i) =>{
                        return (
                            <div className="sw-entry-wrapper">
                                <span className="sw-entry">{entries[i][0]}</span>
                                <span className="sw-entry">{entries[i][1]}</span>
                            </div>
                        )
                    })}
                </SWContent>
            )
        })

        setBodyContent(newBodyContent);
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