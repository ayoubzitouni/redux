import { Add_task,Edit_task,Filter_done,Filter_not } from "../constant/Constant";

export const addTask=(payload)=>{
    return({
    type:Add_task,
    payload
    })
}
export const editTask=(payload)=>{
    return({
    type:Edit_task,
    payload
    })
}
export const filterDone=(payload)=>{
    return({
    type:Filter_done,
    payload
    }
    )
}
export const filterNot=(payload)=>{
    return({
    type:Filter_not,
    payload
    })
}