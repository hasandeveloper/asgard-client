import { DELETE_TASK, FILTER_TASK, LIST_TASK } from "../Utils/ApiUrl";

export const taskReducer = (state, action) => {
    if(action.type === DELETE_TASK ){
        const tasks = state.allTasks.filter((task) => task.id !== action.payload)
        return {
            allTasks: tasks,
            filteredTasks: tasks
        }
    }else if(action.type === LIST_TASK){
        return {
            allTasks: action.payload,
            filteredTasks: action.payload
        }
    }else if(action.type === FILTER_TASK){
        const filtered = state.allTasks.filter((task) => task.title.toLowerCase().includes(action.payload.toLowerCase()))
        return {
            ...state,
            filteredTasks: filtered
        }
    }

    return state
}

export default taskReducer;