import React, {createContext, useReducer} from 'react'
import taskReducer from '../Reducers/TaskReducer'

const INITIAL_STATE = []

export const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    const [state, dispatch] = useReducer(taskReducer, INITIAL_STATE)

  return (
    <TaskContext.Provider value={{state, dispatch}}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider;