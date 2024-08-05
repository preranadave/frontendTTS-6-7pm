import React from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Modal } from 'bootstrap/dist/js/bootstrap.min'
import { ModalBody, ModalHeader } from 'react-bootstrap'
import Swal from 'sweetalert2'

function DeletAbstract() {
    const{id}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        axios.delete(`http://localhost:4000/addabstract-data/${id}`).then((response)=>{
            Swal.fire("<span class='text-danger'>Deleted</span>"+" Successfully!");
            // return (
            //     <>
            //     <Modal><ModalBody><div className='alert alert-success'><span className='text-danger'>Deleted</span> Successfully!</div></ModalBody></Modal>
            //     </>
            // )
            navigate("/manage-abstract");
        })
    })

  
}

export default DeletAbstract