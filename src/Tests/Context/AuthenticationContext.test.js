import { screen, render } from "@testing-library/react";
import { Home } from "../../Components/Home" 

describe("Authentication Context component", () => {

    test("should render sign up component", () => {
        // Arrange
        render(<Home/>)

        //Act
        // ...Nothing

        //Assert
        expect(screen.getByRole('heading',{level: 2})).toBeInTheDocument()
    
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByRole('textbox', { name: /email/i})).toBeInTheDocument()
    
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i)).toHaveAttribute('type','password')
        expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()   
    })
})