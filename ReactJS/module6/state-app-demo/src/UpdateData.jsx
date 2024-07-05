import React, { useState } from "react";

function UpdateData() {
  //destructuring of state
  const [userDetail, setDetails] = useState({
    name: "abc",
    address: "rajkot",
    age: "18",
  });
  const updData = () => {
    setDetails({
      name: "prerna",
      address: "nana mauva",
      age: "25",
    });
  };

  return (
    <>
      <h1>Name:{userDetail.name}</h1>

      <h1>age:{userDetail.age}</h1>

      <h1>address:{userDetail.address}</h1>
      <button
        style={{
          backgroundColor: "black",
          width: "200px",
          color: "white",
          padding: "10px",
          margin: "10px",
        }}
        onClick={updData}
      >
        Update Data
      </button>
    </>
  );
}

export default UpdateData;
