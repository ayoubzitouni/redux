import { Add_task,Edit_task,Filter_done,Filter_not_done,Filter_task } from '../constant/Constant'
const initialState=[]
const Reducer=(state = initialState,action)=>{
    switch (action.type) {
        case Add_task:
            return [...state,action.payload]
        case Edit_task:
            return state.map((element)=>element.id==action.payload.id?{...element,text:action.payload.text}:element)
        case Filter_task:
            return state.map((element)=>element.id==action.payload.id?{...element,filter:action.payload.filter}:element)
        case Filter_done:
            return action.payload
        case Filter_not_done:
            return action.payload
        default:
            return state;
            
    }
} 
export default Reducer