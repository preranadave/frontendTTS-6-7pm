import React, { useState } from "react";

function NameApp() {
  const [name, setName] = useState("Prerna");
  return (
    


    
    <>
      <div style={{"backgroundColor":"aliceblue"}}>
        <h1>My name is{name}</h1>
        <button
          style={{ backgroundColor: "black", color: "white", padding: "10px" }}
          onClick={() => {
            setName("abc");
          }}
        >
          Change name
        </button>
      </div>
    </>
  );
}

export default NameApp;
