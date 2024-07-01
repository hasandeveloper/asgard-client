import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect  } from "react";
import { TaskContext } from "../../Context/TaskContext";
import Form from "./Form";
import getTask from "../../Services/getTask";

export const UpdateTask = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { state, errorData, onChangehandler, taskFormData, setTaskFormData, handleTask } = useContext(TaskContext)

    useEffect(() => {
        const fetchTask = async () => {
            const task  = state.filteredTasks.find(taskObj => taskObj.id == parseInt(id))
            if (task) {
                setTaskFormData({task: task });
            }else{
                const response = await getTask(parseInt(id))
                if(response.status === 200){
                    response.json().then(data => {
                        setTaskFormData({task: data });
                    })
                }
            }
        }
        fetchTask()
    }, []);

    const updateTask = async(e) => {
        e.preventDefault()
        const result = await handleTask("PUT")
        if (result) {
          navigate('/');
        }
    }
    
  return (
    <div>
        <h1>UpdateTask</h1>

        <form onSubmit={updateTask}>
            <Form 
                errorData = {errorData}
                onChangehandler={onChangehandler}
                taskFormData={taskFormData}
            />
            <button type="submit">Update</button>
            <button onClick={() => navigate(-1)}>Back</button>
        </form>
    </div>
  )
}

export default UpdateTask;