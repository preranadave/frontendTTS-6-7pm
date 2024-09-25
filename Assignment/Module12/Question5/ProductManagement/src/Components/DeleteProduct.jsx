import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MessageShow from "./MessageShow";

function DeleteProduct(props) {
  const { id } = useParams();
  const Navigate = useNavigate();

  const [Message, SetMessage] = useState(false);
  useEffect(() => {
    axios.delete(`http://localhost:4000/Products/${id}`).then(() => {
        SetMessage(true);
        if (Message == false) {
          setTimeout(() => {
            SetMessage(false);
            
            props.onHide();
            Navigate("/")
          }, 3000);
        }
    });
  });
  return (
    <div>
   
      {" "}
      <div {...props}
        className={`alert text-center bg-danger w-25 mt-2 mx-auto text-white ${
          Message ? "opacity-100" : "opacity-0"
        } duration-700 transition-all`}
        role="alert"
      >
        <strong className="fw-bold">Deleted</strong>

        <span className="mx-2">Product Succesfully!</span>
      </div>
    </div>
  );
}

export default DeleteProduct;
