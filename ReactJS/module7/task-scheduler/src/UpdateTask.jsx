import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { ModalBody, Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UpdateTask(props) {
  const [SuucessMessage, setSuucessMessage] = useState(false);
  const[showModal,setShowModal]=useState(props.show)
  const TaskName = useRef("");
  const TaskPriority = useRef("");
  const TaskDate = useRef("");
  const id = props.taskid;
  const navigate=useNavigate();
  useEffect(() => {
    (async () => {
      try {
        await axios.get(`http://localhost:8000/task/${id}`).then((response) => {
          TaskName.current.value = response.data.TaskName;
          TaskPriority.current.value = response.data.TaskPriority;
          TaskDate.current.value = response.data.TaskDate;
        });
      } catch (error) {
        console.error(error.response.data);
      }
    })();
  }, []);

  const HandleTaskSubmit = (e) => {
    
    e.preventDefault();
    var SendData = {
      TaskName: TaskName.current.value,

      TaskPriority: TaskPriority.current.value,

      TaskDate: TaskDate.current.value,
    };
    axios.put(`http://localhost:8000/task/${id}`, SendData).then(() => {
      setSuucessMessage(true);
      if (SuucessMessage == false) {
        setTimeout(() => {
          setSuucessMessage(false);
          //setShowModal(false);
          
         
        }, 3000);
      }
    });
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
        id="updateModal"
        
      >
        <ModalBody>
        <div className="d-flex justify-content-end ms-5 translate-middle-y mt-1 ">
          <button onClick={props.onHide} className="bg-white fs-4 border-0">
            <span className="bi bi-x-circle"></span>
          </button>
          </div>
          <div className="task-form col-md-12 mt-5 mx-auto">
            {SuucessMessage && (
              <div className="px-5 my-2 w-75 mx-auto">
                <div className="alert alert-success">SuccessFully Updated!</div>
              </div>
            )}
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
                <Form.Label className="text-start bold">
                  Task Priority
                </Form.Label>
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
        </ModalBody>
      </Modal>
    </>
  );
}

export default UpdateTask;
