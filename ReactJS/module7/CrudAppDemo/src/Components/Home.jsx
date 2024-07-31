import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Container className="mt-5 shadow p-3">
        <h1>React Crud Opeartion</h1>

       <Link to="/adddata"> <button type="button" className="btn btn-lg btn-dark px-3 text-white my-3 ">
          Add Data
        </button></Link>
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td><i className="bi bi-trash3 me-2 border p-1 rounded text-danger"></i><Link to="/editdata"><i className="bi bi-pencil ms-1 border p-1 rounded text-primary"></i></Link></td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}

export default Home;
