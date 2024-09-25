import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageShow from "./MessageShow";

function CreateProduct() {
  //form variables
  const Name = useRef();
  const Price = useRef();
  const Category = useRef();
  const Navigate = useNavigate();

  const [Message, setMessage] = useState(false);
  const AddProduct = (e) => {
    e.preventDefault();
    var Insert = {
      Name: Name.current.value,
      Price: Price.current.value,
      Category: Category.current.value,
    };
    axios.post(`http://localhost:4000/Products`, Insert).then(() => {
      setMessage(true);
      if (Message == false) {
        setTimeout(() => {
          setMessage(false);
          Navigate("/home");
        }, 2000);
      }
    });
  };
  return (
    <>
      <div className="p-3 text-center fs-2">Add Product</div>
      <MessageShow
        isOpen={Message}
        show={() => {
          setMessage(false);
        }}
          type="add"
      ></MessageShow>
      <div
        className="w-25 d-flex flex-column mx-auto p-5 border border-1 my-2 shadow"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 45, 244, 0.222), rgba(244, 252, 154, 0.273))",
        }}
      >
        <form onSubmit={AddProduct}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input type="text" ref={Name} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Price
            </label>
            <input type="text" ref={Price} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Category
            </label>
            <input type="text" ref={Category} className="form-control" />
          </div>

          <button
            type="submit"
            className="btn btn-md w-100 text-white"
            style={{
              background: "rgba(0, 45, 244, 0.400)",
            }}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateProduct;
