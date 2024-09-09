import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function DeleteTask() {
    const {id}=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        axios.delete(`http://localhost:9000/task/${id}`).then((response)=>{
            navigate("/");
        })
    })
  return (
    <div></div>
  )
}

export default DeleteTask