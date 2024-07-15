import React, { useState } from "react";

function Counter() {
    const [count,setCount]=useState(0)
  return (
    <div className="container-fluid mx-auto mt-64 w-36">
      <h1 className=" text-white text-3xl bold"> React web</h1>
      <h1 className="text-3xl bold ms-16 mt-5">{count}</h1>
      <div className="flex justify-center">
        <button
          type="button"
          className="button-xl bg-slate-600 text-white px-4 py-2 m-5"
       onClick={()=>{

        setCount(count-1)
       }}
       >
          Decrement
        </button>

        <button
          type="button"
          className="btn btn-lg bg-slate-600 text-white px-4 py-2 m-5" onClick={()=>{

            setCount(count+1)
           }}
        >
          Increment
        </button>

     
      </div>
      <button
          type="button"
          className="btn btn-lg bg-slate-600 text-white px-10 py-2 mx-4"
          onClick={()=>{

            setCount(0)
           }}
        >
          Reset
        </button>   
    </div>
  );
}

export default Counter;
