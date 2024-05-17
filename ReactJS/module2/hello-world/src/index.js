import React from "react";
import ReacDOM from "react-dom/client"
import MyApp from "./MyApp";
const root=ReacDOM.createRoot(document.getElementById("demo-app"));
root.render(
    <>
     <h1 align="center" style={{"color":"red","fontSize":"50px"}}>hello</h1>
     <MyApp/>

    </>
)