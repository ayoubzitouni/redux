import { Add_task,Edit_task,Filter_done,Filter_not } from '../constant/Constant'
const initialState=[]
export default function reducer(state=initialState,action){
    switch (action.type) {
        case Add_task:
            return console.log("task added")
        case Edit_task:
            return console.log("task Edited")
        case Filter_done:
            break;
        case Filter_not:
            break;
        default:
            return state;
    }
} 