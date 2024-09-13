import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Swal from "sweetalert2";
function DeleteEmployee() {
    const {id}=useParams();
    const Navigate=useNavigate();
    useEffect(()=>{
        axios.delete(`http://localhost:8000/add-employee/${id}`).then(()=>{
            Swal.fire({
                title: "<h1 stye='color:red'>Employee Deleted!</h1>",
                text: "You clicked the button!",
                icon: "success"
              });
              Navigate("/employee-list")
        })
    })
  return (
    <div>


    </div>
  )
}

export default DeleteEmployee