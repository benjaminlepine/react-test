import React from 'react'
import { NICE, SUPER_NICE } from './colors'
import Counter from './Counter'
import HelloUser from "./HelloUser";
import HelloUser2 from "./HelloUser2";
import HelloUser3 from "./HelloUser3";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./InputPage"
import IconView from "./IconView";

const App = () => (
    <div>
{/*     <Counter increment={1} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />*/}
        <HelloUser3 user='Gaël'/>
    </div>  
)

export default App