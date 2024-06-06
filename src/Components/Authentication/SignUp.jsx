import React from 'react';
import { useContext } from "react"
import { Form } from "./Form"
import { AuthenticationContext } from "../../Context/AuthenticationContext"
import { useNavigate } from 'react-router';

export const SignUp = () => {
  const { signUpHandler, formData, errorData, onChangeHandler } = useContext(AuthenticationContext)

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();
    const result = await signUpHandler(e);
    if (result) {
      navigate('/');
    }
  };

  return (
    <div>
       <h1> SignUp </h1>
       <form onSubmit={handleSignUp}>
            <Form formData={formData}
                  errorData={errorData}
                  onChangeHandler={onChangeHandler}
            />
            <button type="submit">Sign Up</button>
            <a href="/sign_in">Sign in</a>
       </form>
    </div>
  )
}
export default SignUp;
