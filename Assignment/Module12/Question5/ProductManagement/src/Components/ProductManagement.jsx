import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MessageShow from "./MessageShow";
import axios from "axios";
import DeleteProduct from "./DeleteProduct";

function ProductManagement() {
  const Navigate = useNavigate();
  const [Products, SetProducts] = useState();
  const [showDelete, setShowDelete] = useState(false);
  const [showDeleteComp, setShowDeleteComp] = useState(false);
  const [SearchValue, setSearchValue] = useState();
  const [FilteredProducts, setFilteredProducts] = useState();

  useEffect(() => {
    axios.get(`http://localhost:4000/Products`).then((response) => {
      SetProducts(response.data);
      setFilteredProducts(response.data);
    });
  }, []);
  const HandleDelete = (e) => {
    setShowDeleteComp(true);
    Navigate(`/delete-product/${e.id}`);
  };
  const HandleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    const filterd =Products.filter(item=>item.Name.toLowerCase().includes(value.toLowerCase()) || item.Price.toLowerCase().includes(value.toLowerCase()) || item.Category.toLowerCase().includes(value.toLowerCase()))
    setFilteredProducts(filterd);
  };
  return (
    <>
      <div>
        <div className="d-flex justify-content-between p-5 border border-bottom-1 border-dark">
          <h1>Manage Products</h1>
          <div>
            <Link to={"/create-product"}>
              {" "}
              <button
                type="button"
                className="btn btn-md w-100 text-white"
                style={{
                  background: "rgba(0, 122, 255, 0.600)",
                }}
              >
                Create Product
              </button>
            </Link>
          </div>
        </div>
        <div>
          <input
            type="text"
            value={SearchValue}
            onChange={HandleSearch}
            className="form-control w-25 mt-4 mx-auto"
            placeholder="Search"
          />
          <div className="table-responsive w-75 mx-auto">
            {showDeleteComp && (
              <DeleteProduct
                isOpen={showDelete}
                onHide={() => {
                  setShowDelete(false);
                }}
              ></DeleteProduct>
            )}

            <table className="table table-bordered mt-5">
              {" "}
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Category</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {FilteredProducts &&
                  FilteredProducts.map((item, index) => (
                    <tr>
                      <td>{item.Name}</td>

                      <td>{item.Price}</td>

                      <td>{item.Category}</td>
                      <td className="d-flex">
                        <button
                          className="btn btn-info mx-1"
                          onClick={() => {
                            Navigate(`/view-product/${item.id}`);
                          }}
                        >
                          Read
                        </button>

                        <button
                          className="btn btn-primary mx-1"
                          onClick={() => {
                            Navigate(`/update-product/${item.id}`);
                          }}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-danger mx-1"
                          onClick={() => {
                            HandleDelete(item);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductManagement;
