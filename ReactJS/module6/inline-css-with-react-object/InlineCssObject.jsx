
import React from "react";
// stored inline style in multiple objects
const style1={
    backgroundColor:"black",
    color:"white",
    width:"50%",
    height:"auto",
    margin:"auto",
    marginTop:"8%",
    padding:"25px"
}
const style2={
    
    color:"white",
    textAlign:"center",
    fontSize:"45px",
    fontFamily:"arial"
}
const style3={
    
    color:"white",
    textAlign:"center",
    fontSize:"17px",
    fontFamily:"sans-serif"
}
function InlineCssObject()
{
    
// call each style on jsx elements create function
   const inline1={
    ...style1
   }
   const inline2={
    ...style2
   }
   const inline3={
    ...style3
   }
    return (
        <>
            <div style={inline1}>
                <h1 style={inline2}>Get in touch with Google map</h1>
                <p style={inline3}>Hey i am used inline stylesheet using multiple object stored reusables</p>
            </div>
        </>
    )
}

export default InlineCssObject
