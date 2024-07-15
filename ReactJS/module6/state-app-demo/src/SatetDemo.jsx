import React, { useState } from "react";
function StateDemo() {
  const [Car, setColor] = useState({
    name: "ford",
    color: "red",
    year: "1138",
  });
  const ChangeColor = () => {
    setColor({ color: "blue" });
  };
  return (
    <>
      my {Car.color} {Car.name} is fron {Car.year}
      <button
        type="button"
        style={{
          color: "white",
          padding: "10px",
          width: "100px",
          backgroundColor: "black",
        }}
        onClick={ChangeColor}
      >
        {" "}
        click to change
      </button>
    </>
  );
}
export default StateDemo;
