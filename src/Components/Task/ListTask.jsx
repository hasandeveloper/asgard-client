import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../../Context/TaskContext';
import { getAllTask }  from '../../Services/getAllTask';
import { deleteTask } from '../../Services/deleteTask';
import { Link } from 'react-router-dom';
import { DELETE_TASK, LIST_TASK } from '../../Utils/ApiUrl';

export const ListTask = () => {
    const { state, dispatch } = useContext(TaskContext);

    useEffect(() => {
      const fetchTasks = async () => {
        const response = await getAllTask()
          if(response.status === 200){
              response.json().then(data => {
                dispatch({
                  type: LIST_TASK,
                  payload: data
              });
          })
        }
      };

      fetchTasks();
    }, [dispatch]); 

      const deletTask = async (taskId) => {
        const response = await deleteTask(taskId)
          if(response.status === 204){
              dispatch({
                type: DELETE_TASK,
                payload: taskId
              });
          }
      }

      return (
        <div>
          <table>
            <tbody>
              {state.map(task => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td><button onClick={() => {deletTask(task.id)}}> Delete </button></td>
                  <td><button> <Link to={`/update_task/${task.id}`}> Update</Link> </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
