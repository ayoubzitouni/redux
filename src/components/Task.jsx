import React, { useState } from 'react'
import { Button, Form, FormControl, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { editTask,Filter } from '../redux/Action/Actions'
import './task.css'

const Task = ({todo}) => {
  const [show,setShow]=useState(false)
  const [edit,setEdit]=useState(todo.text)
  const [done,setDone]=useState("none")
  const [color,setColor]=useState("black")
  const dispatch=useDispatch()
  const handleShow=()=>{
    setShow(!show)
   }
  const handleInput=(e)=>{
    setEdit(e.target.value)
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
      dispatch(Filter({id:todo.id,filter:e.target.checked}))
      console.log(e.target.checked)
    }else {setDone("line-through")
    setColor("gray")
    dispatch(Filter({id:todo.id,filter:e.target.checked}))
    console.log(e.target.checked)
  }
  }
  return (
    <div className='task'>
        {/* dispatch the input to the action  */}
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