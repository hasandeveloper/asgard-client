import React from 'react';
import { ListTask } from './Task/ListTask';
import { useNavigate } from 'react-router';

export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <button onClick={() => navigate("/create_task")}>Add Task</button>
            </div>
            <ListTask/>
        </>
    );
}

export default Home;