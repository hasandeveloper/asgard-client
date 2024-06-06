import React from 'react';
import { Form } from "./Form"
import { AuthenticationContext } from "../../Context/AuthenticationContext"
import { useContext } from "react"
import { useNavigate } from 'react-router';

export const SignIn = () => {
  const {signInHandler, formData, errorData, onChangeHandler} = useContext(AuthenticationContext)
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault();
    const result = await signInHandler(e);
    if (result) {
      navigate('/');
    }
  };

  return (
    <div>
       <h1> SignIn </h1>
       <form onSubmit={handleSignIn}>
            <Form formData={formData}
                  errorData={errorData}
                  onChangeHandler={onChangeHandler}
            />
            <button type="submit">Sign In</button>
            <a href="/sign_up">Sign Up</a>
       </form>
    </div>
  )
}
export default SignIn;
