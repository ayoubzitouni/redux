import { Button } from 'bootstrap'
import React, { useState } from 'react'
import {  Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addTask} from '../redux/Action/Actions'

const Addtask = () => {
    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
    const dispatch=useDispatch()
  return (
    <div>
        <Button onClick={handleShow()}>+</Button>
        <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        <button onClick={(e)=>dispatch(addTask({text:"input"}))}>Add Task</button>
        
    </div>
  )
}

export default Addtask