import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../../Context/TaskContext';
import { getAllTask }  from '../../Services/getAllTask';

export const ListTask = () => {
    const { state, dispatch } = useContext(TaskContext);

    useEffect(() => {
      const fetchTasks = async () => {
        const response = await getAllTask()
          if(response.status === 200){
              response.json().then(data => {
                dispatch({
                  type: "LIST TASK",
                  payload: data
              });
          })
        }
      };

      fetchTasks();
  }, [dispatch]); 

    return (
      <div>
        {state.map(task => (
            <li key={task.id}>{task.title}</li>
        ))}
      </div>
    );
}
