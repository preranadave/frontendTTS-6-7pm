import React, { useState } from "react";

function CounterApp() {
    //destructuring of state
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        style={{ backgroundColor: "aliceblue", width: "50%", margin: "auto",padding:"50px" }}
      >
        <h1>Counter is: {count}</h1>
        <button
          style={{ backgroundColor: "black",width: "200px", color: "white", padding: "10px",margin:"10px" }}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          style={{ backgroundColor: "black", width: "200px",color: "white", padding: "10px",margin:"10px" }}
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </>
  );
}

export default CounterApp;
