import React, { useState } from 'react'
import {  Button, Dropdown, FormControl, Modal } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import {addTask, filterDone, filterNotDone} from '../redux/Action/Actions'


const Addtask = () => {
    const [show,setShow]=useState(false)
    const [todoin,setTodoin]=useState("")
    const [idn,setIdn]=useState(1)
    const tasks=useSelector(state=>state)
    const handleShow=()=>{
        setShow(!show)
    }
    const handleInput=(e)=>{
      setTodoin(e.target.value)
    }
    const Save=()=>{
      dispatch(addTask({id:idn,text:todoin,filter:false}))
      setIdn(idn+1)
      handleShow()
      setTodoin("")

    }
    const handleNotDone=()=>{
      dispatch(filterNotDone(tasks.filter((element)=>element.filter==false)))
    }
    const handleDone=()=>{
      dispatch(filterDone(tasks.filter((element)=>element.filter==true)))
    }
    const reset=()=>{
      dispatch(reset(""))
    }
    const dispatch=useDispatch()
  return (
    <div>
         <Button onClick={handleShow}>+</Button>
         <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter Tasks
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleDone} >Done</Dropdown.Item>
            <Dropdown.Item onClick={handleNotDone}>Not Yet</Dropdown.Item>
            <Dropdown.Item onClick={reset}>Reset</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
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