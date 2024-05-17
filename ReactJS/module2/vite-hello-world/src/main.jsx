import React from "react";
import ReactDOM from "react-dom/client"
import MyApp from "./MyApp";
const root=ReactDOM.createRoot(document.getElementById("demo-app"));
root.render(
    <>
    <h1 align="center" style={{"color":"blue"}}>Hello World</h1>
    <MyApp></MyApp>
    </>
)
