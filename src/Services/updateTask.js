import { TASK_URI, URL } from "../Utils/ApiUrl"
import { authToken } from "../Context/AuthenticationContext"

export const updateTask = async(taskFormData) => {
    try{
        const url = `${URL}${TASK_URI}/${taskFormData.task.id}`;
        const response = await fetch(url,{
            method: 'PUT',
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