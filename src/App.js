import React from 'react'
import HelloUser3 from "./HelloUser3";
import TableOfThings from "./TableOfThings";

const App = () => (
    <div>
        <HelloUser3 increment={5} user='Gaël'/>
        <TableOfThings/>
    </div>
)

export default App