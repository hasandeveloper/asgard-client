import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { SignUp } from "../../../Components/Authentication/SignUp";
import { AuthenticationContext } from "../../../Context/AuthenticationContext"

describe("Sign Up Component", () => {
    test('render email, password and sign up button', () => {
        //Arrange
        render(
            <AuthenticationContext>
                <SignUp/>
            </AuthenticationContext>     
        )
    
        //Act
        // ... nothing
    
        //Assert
        expect(screen.getByRole('heading',{level: 2})).toBeInTheDocument()
    
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByRole('textbox', { name: /email/i})).toBeInTheDocument()
    
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i)).toHaveAttribute('type','password')
        expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()    
    })


    // describe('Validate email', () => {

    //     test('Email cant be blank', () => {
    //     //Arrange
    //     render(
    //         <AuthenticationContext>
    //             <SignUp/>
    //         </AuthenticationContext>     
    //     )
    
    //     //Act
    //     userEvent.click(screen.getByRole('button'))
            
    //     //Assert
        
    //     })

    //     test('should be unique email', () => {})

    //     test('should be correct email formate', () => {})
    // })

    test('password cant be blank', () => {})
})
