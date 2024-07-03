import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FaCircleCheck } from "react-icons/fa6";
import './index.css'
function App() {
  const items = [
    {id:"1001",content:"use array .map"},
    {id:"1002",content:"not a for loop"},
   { id:"1003",content:"give each item unique key"},
   {id:"1004",content:"avoid using array index as key"},
  ];

  return (
    <>
      <div className="container">
        <div className="mx-auto p-5 bg-green-300">
       
            <h1 className="font-bold text-3xl">The react way to render list</h1>
            <ul className="list-none">
              {items.map((item) => (
                <li className=" bg-white p-2 m-2 flex text-3xl">
                  <FaCircleCheck className=" translate-y-1 mx-1 text-green-600 " />
                  {item.content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      
    </>
  );
}

export default App;
