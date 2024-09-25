import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ReadProduct() {
  const { id } = useParams();

  const Navigate = useNavigate();
  const [Products, SetProducts] = useState();
  useEffect(() => {
    axios.get(`http://localhost:4000/Products/${id}`).then((response) => {
      SetProducts(response.data);
      console.log(Products);
    });
  });
  return (
    <div>
      <div className="p-3 text-center fs-2">View Product</div>
      <div
        className="w-25 d-flex flex-column mx-auto p-5 border border-1 my-2 shadow"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 45, 244, 0.100), rgba(244, 252, 154, 0.100))",
        }}
      >
        <div className="d-flex">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label me-1 fw-bolder"
          >
            Name
          </label>
          <span>{Products && Products.Name}</span>
        </div>
        <div className="d-flex">
          <label className="form-label me-1 fw-bolder">Price</label>
          <span>{Products && Products.Price}</span>
        </div>
        <div className="d-flex">
          <label className="form-label me-1 fw-bolder">Category</label>
          <span>{Products && Products.Category}</span>
        </div>
        <button
          type="button"
          onClick={() => {
            Navigate("/");
          }}
          className="btn btn-md w-100 text-white"
          style={{
            background: "rgba(0, 45, 244, 0.400)",
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ReadProduct;
