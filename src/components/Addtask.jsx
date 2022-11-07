import React, { useState } from 'react'
import {  Button, FormControl, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addTask} from '../redux/Action/Actions'

const Addtask = () => {
    const [show,setShow]=useState(false)
    const [todoin,setTodoin]=useState("")
    const [idn,setIdn]=useState(1)
    const handleShow=()=>{
        setShow(!show)
    }
    const handleInput=(e)=>{
      setTodoin(e.target.value)
      console.log(todoin)
    }
    const Save=()=>{
      dispatch(addTask({id:idn,text:todoin}))
      setIdn(idn+1)
      handleShow()
      setTodoin("")

    }
    const dispatch=useDispatch()
  return (
    <div>
         <Button onClick={handleShow}>+</Button>
        <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>What tasks you plan to do</Modal.Title>
        </Modal.Header>
        <Modal.Body>Write your task here</Modal.Body>
        
            <FormControl onChange={(e)=>handleInput(e)}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={Save}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        
    </div>
  )
}

export default Addtask