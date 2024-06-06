import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { SignUp } from "./Components/Authentication/SignUp";
import { SignIn } from "./Components/Authentication/SignIn";
import { Dashboard } from './Components/Dashboard';
import { AuthenticationProvider } from '../src/Context/AuthenticationContext';
import PrivateRoutes from './Utils/PrivateRoutes';

export const App = () => {

  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path="/dashboard" element={<Dashboard/>} exact/>
            <Route path="/" element={<Home/>} exact/>
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