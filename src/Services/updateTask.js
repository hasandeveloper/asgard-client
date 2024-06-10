import { TASK_URI, URL } from "../Utils/ApiUrl"
import { authToken } from "../Context/AuthenticationContext"

export const updateTask = async(taskFormData, httpMethod) => {
    try{
        const url = httpMethod === "PUT" ? `${URL}${TASK_URI}/${taskFormData.task.id}` : `${URL}${TASK_URI}`
        const response = await fetch(url,{
            method: httpMethod,
            body: JSON.stringify(taskFormData),
            headers: {
                'Authorization': authToken(),
                'Content-Type': 'application/json'
            }
        })
        return response
    }catch(error){
        console.log('error in update task', error)
        alert('error in update task', error)
    }
}

export default updateTask;