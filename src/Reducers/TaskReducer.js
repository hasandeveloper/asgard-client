import { DELETE_TASK, LIST_TASK } from "../Utils/ApiUrl";

export const taskReducer = (state, action) => {
    if(action.type === DELETE_TASK ){
        return state.filter((task) => task.id !== action.payload)
    }else if(action.type === LIST_TASK){
        return action.payload
    }
}

export default taskReducer;