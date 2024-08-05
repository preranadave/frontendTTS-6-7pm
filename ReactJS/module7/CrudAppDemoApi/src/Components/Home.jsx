import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link,Navigate, useNavigate, useParams } from "react-router-dom";

function Home() {
  const [data, setData] = useState();
  const {id}=useParams();
  const navigate=useNavigate();
  useEffect(() => {
    // fetch data here
    axios.get(`http://localhost:4000/add-data`).then((response) => {
      setData(response.data);
    });
  }, [data]);

  return (
    <>
      <Container className="mt-5 shadow p-3">
        <h1>React Crud Opeartion</h1>

        <Link to="/adddata">
          {" "}
          <button
            type="button"
            className="btn btn-lg btn-dark px-3 text-white my-3 "
          >
            Add Data
          </button>
        </Link>
        <table className="table my-3">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Pincode</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                      <td>{item.pincode}</td>
                      <td>
                       <button type="button" className="btn btn-md border border-0 outline-0" onClick={()=>{navigate(`/deletedata/${item.id}`)}}> <span className="bi bi-trash me-2 border p-1 rounded text-danger"></span></button>
                        <button type="button" className="btn btn-md border border-0 outline-0" onClick={()=>{navigate(`/editdata/${item.id}`)}}>
                          <span className="bi bi-pencil ms-1 border p-1 rounded text-primary"></span>
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </Container>
    </>
  );
}

export default Home;
