import { useNavigate } from "react-router";
import Form from "./Form";
import { useContext, useEffect } from "react";
import { TaskContext } from "../../Context/TaskContext";

export const CreateTask = () => {
    const navigate = useNavigate()
    const { errorData, onChangehandler, taskFormData, setTaskFormData, handleTask } = useContext(TaskContext)

    useEffect(() => {
        setTaskFormData(
            {
                task: {
                  title: "",
                  description: "",
                  status: ""
                }
              }
        )
    }, [])

    const createHandler = async (e) => {
        e.preventDefault()
        const result = await handleTask("POST")
        if (result) {
          navigate('/');
        }
    }

  return (
    <div>
        <h1>CreateTask</h1>
        <form onSubmit={createHandler}>
            <Form 
                errorData = {errorData}
                onChangehandler={onChangehandler}
                taskFormData={taskFormData}
            />
            <button type="submit">Create</button>
            <button onClick={() => navigate("/")}>Back</button>
        </form>
    </div>
  )
}

export default CreateTask;
