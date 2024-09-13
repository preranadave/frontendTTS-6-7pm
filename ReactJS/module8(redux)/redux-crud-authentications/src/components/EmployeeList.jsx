import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarApp from "../NavbarApp";
import Header from "../Header";

function EmployeeList() {
  const [EmployeeData, SetEmployeeData] = useState();
  const Navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:8000/add-employee`).then((response) => {
      SetEmployeeData(response.data);
    });
  }, [EmployeeData]);
  return (
    <>
      <Header />
      <NavbarApp />
      <div className="mt-5">
        <div className="d-flex flex-row justify-content-between mx-5">
          <h2 className="text-center">Employee List</h2>
          <Button
            className="btn btn-md btn-primary bg-primarym mx-5"
            onClick={() => {
              Navigate(`/add-employee`);
            }}
          >
            Add Employee
          </Button>
        </div>
        <Container className="mx-auto mt-5">
          <Table responsive>
            <tr>
              {" "}
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>

            {EmployeeData &&
              EmployeeData.map((item) => {
                return (
                  <tr>
                    <td>{item.Name}</td>

                    <td>{item.LastName}</td>

                    <td>{item.Email}</td>

                    <td>{item.Salary}</td>

                    <td>{item.Phone}</td>

                    <td>{item.Address}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary bg-primary text-white mx-2"
                        onClick={() => {
                          Navigate(`/update-employee/${item.id}`);
                        }}
                      >
                        <span className="bi bi-pencil"></span>
                      </button>

                      <button className="btn btn-sm btn-danger bg-danger text-white mx-2" onClick={(()=>{Navigate(`/delete-employee/${item.id}`)})}>
                        <span className="bi bi-trash"></span>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </Table>
        </Container>
      </div>
    </>
  );
}

export default EmployeeList;
