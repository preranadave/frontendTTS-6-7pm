import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
function TaskAddForm() {
    const[SuucessMessage,setSuucessMessage]=useState(false);
  const TaskName = useRef("");
  const TaskPriority = useRef("");
  const TaskDate = useRef("");
  const HandleTaskSubmit = (e) => {
   e.preventDefault();
    var SendData={
        TaskName:TaskName.current.value,
        
        TaskPriority:TaskPriority.current.value,
        
        TaskDate:TaskDate.current.value,

    }
    axios.post(`http://localhost:9000/task`,SendData).then(()=>{
        setSuucessMessage(true)
        if (SuucessMessage == false) {
            setTimeout(() => {
              setSuucessMessage(false);
            }, 3000);
          }
          e.target.reset();
    })
  };
  return (
    <div className="task-form col-md-12 mt-5 mx-auto">
        {SuucessMessage&&
         <div className="px-5 my-2 w-75 mx-auto">
         <div className="alert alert-success">SuccessFully added!</div>
       </div>
        }
      <Form
        action=""
        className="d-flex flex-row justify-content-center align-items-end"
        onSubmit={HandleTaskSubmit}
      >
        <Form.Group className="mx-2 d-flex flex-column">
          <Form.Label className="text-start">Task name</Form.Label>
          <input
            type="text"
            name="taskname"
            placeholder="Enter Task Name"
            className="form-control py-2"
            ref={TaskName}
          ></input>
        </Form.Group>
        <Form.Group className="d-flex flex-column">
          <Form.Label className="text-start bold">Task Priority</Form.Label>
          <Form.Select className="mx-2 py-2" ref={TaskPriority}>
            <option value="high">High</option>

            <option value="low">Medium</option>

            <option value="medium">Low</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mx-4 d-flex flex-column">
          <Form.Label className="text-start bold">Deadline</Form.Label>
          <input
            type="date"
            name="taskdate"
            className="form-control py-2"
            ref={TaskDate}
          ></input>
        </Form.Group>
        <Button
          type="submit"
          className="btn btn-primary bg-primary text-white mt-4 px-3 fs-5"
        >
          <span className="bi bi-plus"></span>
        </Button>
      </Form>
    </div>
  );
}

export default TaskAddForm;
