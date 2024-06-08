import { TASK_URI, URL } from "../Utils/ApiUrl";
import { authToken } from "../Context/AuthenticationContext";

export const deleteTask = (taskId) => {
    try{
        const response = fetch(`${URL}${TASK_URI}/${taskId}`,{
            method: 'DELETE',
            headers: {
                'Authorization': authToken()
            }
        })
        return response
    }catch(error){
        alert("unable to delete task", error)
    }
}
