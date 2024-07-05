import React from "react";

function Employeelist(props) {
  return (
    <div>
      <h1>Name is:{props.name}</h1>
    </div>
  );
}

function EmployeeData(props) {
  return (
    <div>
      <Employeelist name="prerna" />
      <h1>Adress is:{props.address}</h1>
    </div>
  );
}
export default EmployeeData;