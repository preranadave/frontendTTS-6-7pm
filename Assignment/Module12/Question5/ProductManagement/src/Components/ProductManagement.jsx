import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ProductManagement() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-between p-5 border border-bottom-1 border-dark">
        <h1>Search Product</h1>
        <div>
          <Link to={"/create-product"}>
            {" "}
            <button type="button" className="btn btn-primary btn-md">
              Create Product
            </button>
          </Link>
        </div>
      </div>

    </>
  );
}

export default ProductManagement;
