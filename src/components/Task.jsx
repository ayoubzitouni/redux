import React from 'react'
import { useDispatch } from 'react-redux'
import { editTask } from '../redux/Action/Actions'

const Task = () => {
    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={(e)=>dispatch(editTask({text:"input"}))}>Edit Task</button>
    </div>
  )
}

export default Task