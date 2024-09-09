import React, { useEffect,useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Badge from 'react-bootstrap/Badge';
import UpdateTask from "./UpdateTask";
import { Modal } from "react-bootstrap";

function TaskList() {
    const [TaskData,setTaskData]=useState();
    const[lengthData,setDataLength]=useState();
    const [showupdatemodal,SetShowUpdateModal]=useState(false)
    const [taskid,setTaskID]=useState();
    const navigate=useNavigate();
    useEffect(()=>
    {
        axios.get(`http://localhost:9000/task`).then((response)=>{
            setTaskData(response.data)
            setDataLength(response.data.length)
        })
    },[TaskData])
    const HandleDelete = (e) => {
   
        confirmAlert({
            title: 'Delete Task!',
            message: 'Are you sure?',
            buttons: [
              {
                label: 'Yes',
                onClick: () =>  navigate(`/deletetask/${e}`)
              },
              {
                label: 'No',
                onClick: () =>{}
              }
            ]
          });
       
       
      };
    const HandleUpdate=(e)=>{
    
      SetShowUpdateModal(true)
      setTaskID(e);
    
    }
  return (
    <>
      <div className="tasklist col-md-8 mx-auto mt-5">
        <button className="btn btn-lg total-task bg-primary border-none text-white rounded py-2 px-2">
          Total Tasks<Badge bg="dark" className="mx-2">{lengthData}</Badge>
          
        </button>
        <Table responsive>
          <tr>
            {" "}
            <th>Task Name</th>
            <th>Task Priority</th>
            <th>Task Deadline</th>
            <th>Action</th>
          </tr>
          {TaskData && TaskData.map((row)=>{
            return(
                <>
                  <tr className="border border-1">
                    <td style={{width:"200px"}} className="py-3 px-2">{row.TaskName}</td>
                    <td style={{width:"200px"}}>{row.TaskPriority}</td>
                    <td style={{width:"200px"}}>{row.TaskDate}</td>
                    <td style={{width:"100px"}}><button type="button" className="btn btn-sm bg-danger text-white me-3" onClick={()=>HandleDelete(row.id)}><span className="bi bi-trash"></span></button>
                    
                    <button type="button" className="btn btn-sm bg-primary text-white" onClick={()=>HandleUpdate(row.id)}><span className="bi bi-pencil" ></span></button></td>
                  </tr>
                </>
            )
          })}
        
        </Table>
        {showupdatemodal && 
        <UpdateTask show={showupdatemodal}  onHide={() => SetShowUpdateModal(false)} taskid={taskid} />}
      </div>
    </>
  );
}

export default TaskList;
