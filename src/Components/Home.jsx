import React, { useContext } from 'react';
import { ListTask } from './Task/ListTask';
import { useNavigate } from 'react-router';
import { TaskContext } from '../Context/TaskContext';
import SearchTask from './Task/SearchTask';
import FilterTask from './Task/FilterTask';

export const Home = () => {
    const navigate = useNavigate()
    const { dispatch } = useContext(TaskContext)
    return (
        <>
            <div>
                <button onClick={() => navigate("/create_task")}>Add Task</button>
                <SearchTask dispatch={dispatch}/>
                <FilterTask dispatch={dispatch}/>
            </div>
            <ListTask/>
        </>
    );
}

export default Home;