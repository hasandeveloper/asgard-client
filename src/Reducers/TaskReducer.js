
export const taskReducer = (state, action) => {
    if(action.type === "LIST TASKS" || action.type === "ADD TASK"){
        return [...state, ...action.payload]
    }else if(action.type === "DELETE TASK"){
        return state.filter((task) => task.id !== action.payload)
    }else{
        return [...state, ...action.payload]
    }
}

export default taskReducer;