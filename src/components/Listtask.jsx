import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const Listtask = () => {
  const todos=useSelector(state=>state) //access the store state
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      {todos && todos.map((todo)=><Task todo={todo}/>)}
    </div>
  )
}

export default Listtask