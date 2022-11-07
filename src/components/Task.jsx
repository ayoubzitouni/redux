import React, { useState } from 'react'
import { Button, Form, FormControl, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { editTask } from '../redux/Action/Actions'
import { Edit_task } from '../redux/constant/Constant'
import './task.css'

const Task = ({todo}) => {
  const [show,setShow]=useState(false)
  const [edit,setEdit]=useState(todo.text)
  const [done,setDone]=useState("none")
  const [color,setColor]=useState("black")
  const dispatch=useDispatch()
  const handleShow=()=>{
    setShow(!show)
    setEdit("")
  }
  const handleInput=(e)=>{
    setEdit(e.target.value)
    console.log(edit)
  }
  const Edit=()=>{
    dispatch(editTask({id:todo.id,
      text:edit}))
      handleShow()
  }
  const handleCheck=(e)=>{
    
    if(!e.target.checked){
      setDone("none")
      setColor("black")
      
    }else {setDone("line-through")
    setColor("gray")}
  }
  return (
    <div className='task'>
        {/* dispatch the input to the action  */}
        {console.log(edit)}
        <h1 style={{textDecoration:done,color:color}}>{todo.text}</h1>
        <div className='buttons'>
        <Form.Check 
            type={`checkbox`}
            id={`default-checkbox`}
            onChange={(e)=>handleCheck(e)}
          />
        <Button onClick={handleShow}>Edit Task</Button>
        <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>What tasks you plan to do</Modal.Title>
        </Modal.Header>
        <Modal.Body>Write your task here</Modal.Body>
           <FormControl value={edit} onChange={(e)=>handleInput(e)}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={Edit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    </div>
  )
}

export default Task