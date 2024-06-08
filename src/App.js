import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { SignUp } from "./Components/Authentication/SignUp";
import { SignIn } from "./Components/Authentication/SignIn";
import { AuthenticationProvider } from '../src/Context/AuthenticationContext';
import { CreateTask } from '../src/Components/Task/CreateTask';
import { ListTask } from './Components/Task/ListTask';
import { UpdateTask } from './Components/Task/UpdateTask';
import PrivateRoutes from './Utils/PrivateRoutes';

export const App = () => {

  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/create_task" element={<CreateTask/>} exact/>
            <Route path="/update_task/:id" element={<UpdateTask/>} exact/>
            <Route path="/list_task" element={<ListTask/>} exact/>
          </Route>


          <Route path="/sign_up" element={<SignUp/>}/>
          <Route path="/sign_in" element={<SignIn/>}/>
          <Route path="*" element={<h1>Page not found</h1>}/>
        </Routes>
      </BrowserRouter>
    </AuthenticationProvider>
  )
}

export default App;