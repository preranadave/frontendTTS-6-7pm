import React, { useRef } from "react";

function CreateProduct() {
  //form variables
  const Name = useRef();
  const Price = useRef();
  const Ctegory = useRef();
  const AddProduct = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="p-3 text-center fs-2">Add Product</div>
      <div
        className="w-25 d-flex flex-column mx-auto p-5 border border-1 my-2 shadow"
        style={{
          background:
            "linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))",
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
            <input type="text" className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateProduct;
