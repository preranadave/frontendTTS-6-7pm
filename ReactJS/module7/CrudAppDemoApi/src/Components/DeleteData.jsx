import React from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
function DeleteData() {
    const{id}=useParams();
  //  alert(id)
    const navigate=useNavigate();
    useEffect(()=>{
        axios.delete(`http://localhost:4000/add-data/${id}`).then((response) => {
            Swal.fire({
                title: "Oh?",
                text: "Yor abstract is deleted Successfully?",
                icon: "success"
              });
              navigate("/")
        
          });
        }, []);
  return (
    <div>


    </div>
  )
}

export default DeleteData