import { TASK_URI, URL } from "../Utils/ApiUrl";
import { authToken } from "../Context/AuthenticationContext";

export const getTask = async (taskId) => {
      try{
        const response = await fetch(`${URL}${TASK_URI}/${taskId}`,{
            method: 'GET',
            headers: {
                'Authorization': authToken()
            }
        })
        return response
      }catch(error){
        alert(error)
      }  
}

export default getTask;