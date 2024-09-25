import React from "react";

function MessageShow(props) {
  return (
    <div
      className={`alert text-center bg-primary w-25 mx-auto text-white ${
        props.isOpen ? "opacity-100" : "opacity-0"
      } duration-700 transition-all`}
      role="alert"
    >
      {props.type == "add" && <strong className="fw-bold">Added</strong>}
      {props.type == "update" && <strong className="fw-bold">Updated</strong>}
      {props.type == "delete" && <strong className="fw-bold">Deleted</strong>}

      <span className="mx-2">Product Succesfully!</span>
    </div>
  );
}

export default MessageShow;
