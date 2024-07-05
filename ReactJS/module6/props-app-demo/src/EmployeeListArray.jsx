import React from "react";

function EmployeeListArray() {
  const EmpList = [
    {
      id: 101,
      Name: "abc",
    },
    {
      id: 101,
      Name: "abc",
    },
    {
      id: 101,
      Name: "abc",
    },
    {
      id: 101,
      Name: "abc",
    },
    {
      id: 101,
      Name: "abc",
    },
  ];
  return (
    <>
      {EmpList &&
        EmpList.map((items) => {
          return (
            <>
              <div>
                <h1>Name {items.Name}</h1>
              </div>
              
            </>
          );
        })}
    </>
  );
}
export default EmployeeListArray;
