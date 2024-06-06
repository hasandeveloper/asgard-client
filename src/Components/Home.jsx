import React from 'react';
import { SignIn } from "./Authentication/SignIn";
import { Dashboard } from './Dashboard';
import { authToken } from '../Context/AuthenticationContext';

export const Home = () => {
    const token = authToken()

    let content;
    if (token != null) {
        content = <Dashboard/>;
    } else {
        content = <SignIn />;
    }

    return (
        <>
            {content}
        </>
    );
}

export default Home;

