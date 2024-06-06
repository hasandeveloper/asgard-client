import { render, screen } from "@testing-library/react";
import { Form } from "../../../Components/Authentication/Form";

describe('Form Component', () => {
    test('render only email and password', () => {
        //Arrange
        render(<Form/>)
    
        //Act
        // ... nothing
    
        //Assert
        // This function is used when you expect the element to be present in the document. If the element cannot be found, it will throw an error, which can be useful for asserting that certain elements are present in your component's output.
        // Example: getByRole('button', { name: /submit/i })
        expect(screen.getByRole('heading',{level: 2})).toBeInTheDocument()
    
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByRole('textbox', { name: /email/i})).toBeInTheDocument()
    
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i)).toHaveAttribute('type','password')
        
        // This function is similar to getByRole, but it does not throw an error if the element cannot be found. Instead, it returns null. This makes it suitable for cases where you want to check for the absence of an element without causing your test to fail.
        // Example: queryByRole('button', { name: /submit/i })
        expect(screen.queryByRole('button', { name: /sign in/i })).not.toBeInTheDocument()
        expect(screen.queryByRole('button', { name: /sign up/i})).not.toBeInTheDocument()
    })
})


// getByRole: Use when you're interested in the role or semantic meaning of the element, such as buttons, links, landmarks, etc.
// getByLabelText: Use when you want to find form elements based on their associated labels, ensuring they are properly labeled for accessibility and usability.