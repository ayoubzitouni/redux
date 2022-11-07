// call constant that had the name of the action
import { Add_task,Edit_task } from "../constant/Constant";

export const addTask=(payload)=>{
    return{
    type:Add_task,
    payload
    }
}
export const editTask=(payload)=>{
    return{
    type:Edit_task,
    payload
    }
}
