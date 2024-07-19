import React, { useState, useEffect } from "react";
import Countdown from "../src/assets/countdown.gif";
function LazyLoad() {
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return loader ? (
    <>
      <img src={Countdown} style={{ width: "1500px", height: "780px" }}></img>
    </>
  ) : (
    <>
      <div className="w-50 mx-auto mt-5 bg-dark text-white p-5">
        <h1>Counter is: {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="btn btn-lg btn-success px-5"
        >
          +
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
          className="btn btn-lg btn-danger ms-5 px-5"
        >
          -
        </button>
      </div>
    </>
  );
}

export default LazyLoad;
