import React from "react";

function CarList(props) {
  return (
    <>
      <h1>{props.keyvalue}</h1>
      <h1>{props.brandname}</h1>
    </>
  );
}

function CarDisplay() {
  const Cars = [
    { id: 101, Brand: "ford" },
    { id: 101, Brand: "ford" },
    { id: 101, Brand: "ford" },
    { id: 101, Brand: "ford" },
    { id: 101, Brand: "ford" },
  ];
  return (
    <>
      {Cars.map((car) => (
        <CarList brandname={car.Brand} keyvalue={car.id}></CarList>
      ))}
    </>
  );
}
export default CarDisplay;
