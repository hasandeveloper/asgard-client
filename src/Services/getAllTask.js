import { TASK_URI, URL } from "../Utils/ApiUrl";
import { authToken } from "../Context/AuthenticationContext";

export const getAllTask = async () => {
      try{
        const response = await fetch(`${URL}${TASK_URI}`,{
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

export default getAllTask;