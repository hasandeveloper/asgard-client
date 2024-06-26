import React, {createContext, useReducer, useState} from 'react'
import taskReducer from '../Reducers/TaskReducer'
import updateTask from '../Services/updateTask'

const INITIAL_STATE = {
  allTasks: [],
  filteredTasks: []
}

export const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    const [state, dispatch] = useReducer(taskReducer, INITIAL_STATE)

    const [errorData, setErrorData] = useState({
      message: ""
    })

    const [taskFormData, setTaskFormData] = useState({
      task: {
        title: "",
        description: "",
        status: ""
      }
    });

    const onChangehandler = (e) => {
      setTaskFormData({ task: {
          ...taskFormData.task,
          [e.target.name]: e.target.value
        }
      })
    }

    const handleTask = async (httpMethod) => {
      const response = await updateTask(taskFormData,httpMethod)
      if(response.status === 422){
        response.json().then(errorData => {
             setErrorData({message: errorData.message})
        });
        return false
      }else if(response.status === 200 || response.status === 201){
        response.json().then(resp => {
            setErrorData({message: ""})
            console.log(resp)
       });
       return true
      }
    }
   

  return (
    <TaskContext.Provider value={{state, dispatch, errorData, taskFormData, onChangehandler, setTaskFormData, handleTask, setErrorData}}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider;