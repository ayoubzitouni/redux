import { Add_task,Edit_task,Filter_done,Filter_not } from '../constant/Constant'
const initialState=[]
const Reducer=(state = initialState,action)=>{
    switch (action.type) {
        case Add_task:
            return [...state,action.payload]
        case Edit_task:
            return state.map((element)=>element.id==action.payload.id?{...element,text:action.payload.text}:element)
        default:
            break;
    }
} 
export default Reducer