import React from 'react';
import Main from './Main';
import ISS from './ISS';
import SW from './SW';

import {Switch, Link, Route} from 'react-router-dom';

export default function App(props){
    return (
        <Switch>
            <Route path="/ISS"><ISS/></Route>
            <Route path="/SW"><SW/></Route>
            <Route path="/"><Main/></Route>
        </Switch>   
    )
}