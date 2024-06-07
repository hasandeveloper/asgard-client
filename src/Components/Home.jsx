import React, {useContext} from 'react';
import { ListTask } from './Task/ListTask';
import { TaskProvider } from '../Context/TaskContext';

export const Home = () => {

    return (
        <TaskProvider>
            <ListTask/>
        </TaskProvider>
    );
}

export default Home;