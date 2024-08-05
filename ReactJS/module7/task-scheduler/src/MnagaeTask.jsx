import React from 'react'
import { Container,Row } from 'react-bootstrap'
import TaskAddForm from './TaskAddForm'
import TaskList from './TaskList'
function MnagaeTask() {
  return (
    <>
    <div className='header'>
        <Container fluid className='p-4 bg-primary'>

            <h1 className='text-white bold text-center'>Task Manager</h1>
            
        </Container>

    </div>
    <Row>
        <TaskAddForm></TaskAddForm>
    </Row>
    <Row><TaskList></TaskList></Row>
    </>
  )
}

export default MnagaeTask