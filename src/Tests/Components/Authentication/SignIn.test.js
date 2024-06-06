import { render, screen } from "@testing-library/react";
import { SignIn } from "../../../Components/Authentication/SignIn";

describe("Sign In Component", () => {
    test('render email, password and sign in, ', () => {
        //Arrange
        render(<SignIn/>)
    
        //Act
        // ... nothing
    
        //Assert
        expect(screen.getByRole('heading',{level: 2})).toBeInTheDocument()
    
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByRole('textbox', { name: /email/i})).toBeInTheDocument()
    
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i)).toHaveAttribute('type','password')
    
        expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()    
    })
})
