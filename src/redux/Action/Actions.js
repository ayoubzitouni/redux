// call constant that had the name of the action
import { Add_task,Edit_task,Filter_done,Filter_not_done,Filter_task, Reset } from "../constant/Constant";

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
export const Filter=(payload)=>{
    return{
        type:Filter_task,
        payload
    }
}
export const filterDone=(payload)=>{
    return{
        type:Filter_done,
        payload
    }
}
export const filterNotDone=(payload)=>{
    return{
        type:Filter_not_done,
        payload
    }
}
export const reset=(payload)=>{
    return{
        type:Reset,
        payload
    }
}
