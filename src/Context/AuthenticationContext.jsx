import { React, createContext, useState } from 'react'
import { AUTHENTICATION_URI, SIGNIN_URI, URL } from '../Utils/ApiUrl'

export const  AuthenticationContext = createContext()

export const AuthenticationProvider = ({children}) => {

    const [formData, setFormData] = useState({ user :{
        email: "",
        password: ""
        }
    })

    const [errorData, setErrorData] = useState({
        message: ""
    })

    const onChangeHandler = (e) => {
        setFormData({
            user: {
              ...formData.user,
              [e.target.name]: e.target.value
            }
          });
    }

    const signUpHandler = async (e) => {
        e.preventDefault();
        return await authenticate("signUp");
    };

    const signInHandler = async (e) => {
        e.preventDefault();
        return await authenticate("signIn");
    };

    const authenticate = async (type) => {
        const url = type === "signUp" ? `${URL}${AUTHENTICATION_URI}` : `${URL}${AUTHENTICATION_URI}${SIGNIN_URI}`
        try{
            const response = await fetch(url,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
            
            if(response.status === 422 || response.status === 500){
                response.json().then(errorData => {
                     setErrorData({message: errorData.message})
                });
                return false
            }else if(response.status === 200){
                response.json().then(resp => {
                    setErrorData({message: ""})
                    console.log(resp.message)
               });
               const token = response.headers.get('Authorization');
               localStorage.setItem('token', token)
               return true
            }
        }catch(error){
            alert(error)
            return false
        }
    }

  return (
    <AuthenticationContext.Provider value={{signUpHandler, formData, errorData, onChangeHandler, signInHandler}}>
        {children}
    </AuthenticationContext.Provider>
  )
}

export const authToken = () => {
    return localStorage.getItem('token')
}

export default AuthenticationProvider;



