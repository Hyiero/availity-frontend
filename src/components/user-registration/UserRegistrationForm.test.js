import { render, screen, queryByAttribute, fireEvent } from '@testing-library/react';
import UserRegistrationForm from './UserRegistrationForm';

const getById = queryByAttribute.bind(null, 'id');
const mockSubmit = jest.fn();

describe('Submit Button:', () => {
    const getInputFields = () => {
        const firstNameInput = screen.getByLabelText(/^First Name/i);
        const lastNameInput = screen.getByLabelText(/^Last Name/i);
        const npiInput = screen.getByLabelText(/^NPI #/i);
        const addressInput = screen.getByLabelText(/^Business Address/i);
        const phoneNumberInput = screen.getByLabelText(/^Phone #/i);
        const emailInput = screen.getByLabelText(/^Email/i);
        return { firstNameInput, lastNameInput, npiInput, addressInput, phoneNumberInput, emailInput };
    }

    test('should be disabled on initial load', () => {
        // Arrange
        // Act
        const view = render(<UserRegistrationForm  onSubmit={mockSubmit}/>);
    
        //Assert
        expect(getById(view.container, 'userRegSubmitButton').disabled).toBe(true);
    });

    test('should be disabled if all fields are filled in but some are invalid', () => {
        // Arrange
        const view = render(<UserRegistrationForm  onSubmit={mockSubmit}/>);
        const { firstNameInput, lastNameInput, npiInput, addressInput, phoneNumberInput, emailInput } = getInputFields();

        // Act
        fireEvent.change(firstNameInput, { target: { value: 'asd'}});
        fireEvent.change(lastNameInput, { target: { value: 'asd'}});
        fireEvent.change(npiInput, { target: { value: 'asd'}});
        fireEvent.change(addressInput, { target: { value: 'asd'}});
        fireEvent.change(phoneNumberInput, { target: { value: 'asd'}});
        fireEvent.change(emailInput, { target: { value: 'asd'}});
        fireEvent.blur(emailInput, { target: { value: 'asd'}});

        //Assert
        expect(getById(view.container, 'userRegSubmitButton').disabled).toBe(true);
    });

    test('should be disabled if not all fields are filled out', () => {
        // Arrange
        const view = render(<UserRegistrationForm  onSubmit={mockSubmit}/>);
        const { firstNameInput, lastNameInput } = getInputFields();

        // Act
        fireEvent.change(firstNameInput, { target: { value: 'asd'}});
        fireEvent.change(lastNameInput, { target: { value: 'asd'}});

        //Assert
        expect(getById(view.container, 'userRegSubmitButton').disabled).toBe(true);
    });

    test('should enable the submit button when all fields have been filled out and are valid', () => {
        // Arrange
        const view = render(<UserRegistrationForm  onSubmit={mockSubmit}/>);
        const { firstNameInput, lastNameInput, npiInput, addressInput, phoneNumberInput, emailInput } = getInputFields();

        // Act
        fireEvent.change(firstNameInput, { target: { value: 'asd'}});
        fireEvent.change(lastNameInput, { target: { value: 'asd'}});
        fireEvent.change(npiInput, { target: { value: 'asd'}});
        fireEvent.change(addressInput, { target: { value: 'asd'}});
        fireEvent.change(phoneNumberInput, { target: { value: '0123456789'}});
        fireEvent.change(emailInput, { target: { value: 'asd@asd.com'}});

        //Assert
        expect(getById(view.container, 'userRegSubmitButton').disabled).toBe(false);
    });

    test('should execute mockSubmit when submit button is clicked', () => {
        // Arrange
        const view = render(<UserRegistrationForm  onSubmit={mockSubmit}/>);
        const submitButton = getById(view.container, 'userRegSubmitButton');
        const { firstNameInput, lastNameInput, npiInput, addressInput, phoneNumberInput, emailInput } = getInputFields();
        fireEvent.change(firstNameInput, { target: { value: 'asd'}});
        fireEvent.change(lastNameInput, { target: { value: 'asd'}});
        fireEvent.change(npiInput, { target: { value: 'asd'}});
        fireEvent.change(addressInput, { target: { value: 'asd'}});
        fireEvent.change(phoneNumberInput, { target: { value: '0123456789'}});
        fireEvent.change(emailInput, { target: { value: 'asd@asd.com'}});

        // Act
        fireEvent.click(submitButton, { target: { value: {} } });

        //Assert
        expect(mockSubmit.mock.calls.length).toBe(1);
    });
})

describe('Text Fields:', () => {
    test('should render all of the needed form fields', () => {
        // Arrange
        // Act
        const view = render(<UserRegistrationForm  onSubmit={mockSubmit}/>);

        // Assert
        expect(screen.getByLabelText(/^First Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^Last Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^NPI #/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^Business Address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^Phone #/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^Email/i)).toBeInTheDocument();
    });

    const textFieldRequiredErrorTest = (matcher, targetValue, fieldId, expectedError) => {
        test('should show error if the input was blurred and the value is still empty', () => {
            // Arrange
            const view = render(<UserRegistrationForm  onSubmit={mockSubmit}/>);
            const input = screen.getByLabelText(matcher)

            // Act
            fireEvent.blur(input, { target: { value: targetValue}});

            //Assert
            expect(getById(view.container, `${fieldId}-helper-text`).textContent).toBe(expectedError);
        });
    }

    const textFieldNoErrorTest = (matcher, targetValue, fieldId) => {
        test('should not show error if the input was blurred and the value is valid', () => {
            // Arrange
            const view = render(<UserRegistrationForm  onSubmit={mockSubmit}/>);
            const input = screen.getByLabelText(matcher)

            // Act
            fireEvent.blur(input, { target: { value: targetValue }});

            //Assert
            expect(getById(view.container, `${fieldId}-helper-text`)).toBe(null);
        });
    } 

    describe('First Name:', () => {
        var matcher = /^First Name/i;
        var fieldId = 'firstName';
        textFieldRequiredErrorTest(matcher, '     ', fieldId, 'Required Field');
        textFieldNoErrorTest(matcher, 'ARealValue', fieldId);
    })

    describe('Last Name:', () => {
        var matcher = /^Last Name/i;
        var fieldId = 'lastName';
        textFieldRequiredErrorTest(matcher, '     ', fieldId, 'Required Field');
        textFieldNoErrorTest(matcher, 'ARealValue', fieldId);
    })

    describe('NPI #:', () => {
        var matcher = /^NPI #/i;
        var fieldId = 'npi';
        textFieldRequiredErrorTest(matcher, '     ', fieldId, 'Required Field');
        textFieldNoErrorTest(matcher, 'ARealValue', fieldId);
    })

    describe('Business Address:', () => {
        var matcher = /^Business Address/i;
        var fieldId = 'address';
        textFieldRequiredErrorTest(matcher, '     ', fieldId, 'Required Field');
        textFieldNoErrorTest(matcher, 'ARealValue', fieldId);
    })

    describe('Phone #:', () => {
        var matcher = /^Phone #/i;
        var fieldId = 'phoneNumber';

        test('should show error if the input was blurred and the value is not a ten digit number', () => {
            // Arrange
            const view = render(<UserRegistrationForm  onSubmit={mockSubmit}/>);
            const input = screen.getByLabelText(matcher)

            // Act
            fireEvent.blur(input, { target: { value: 'adsd'}});

            //Assert
            expect(getById(view.container, `${fieldId}-helper-text`).textContent).toBe('Phone # must be 10 digits');
        });

        test('should show error if the input was blurred and the value was 10 characters but not all digits', () => {
            // Arrange
            const view = render(<UserRegistrationForm  onSubmit={mockSubmit}/>);
            const input = screen.getByLabelText(matcher)

            // Act
            fireEvent.blur(input, { target: { value: 'abcde01234'}});

            //Assert
            expect(getById(view.container, `${fieldId}-helper-text`).textContent).toBe('Phone # must be 10 digits');
        });

        textFieldNoErrorTest(matcher, '1234567890', fieldId);
    })

    describe('Email:', () => {
        var matcher = /^Email/i;
        var fieldId = 'email';

        test('should show error if the input was blurred and the value is not a valid email', () => {
            // Arrange
            const view = render(<UserRegistrationForm  onSubmit={mockSubmit}/>);
            const input = screen.getByLabelText(matcher)

            // Act
            fireEvent.blur(input, { target: { value: 'adsd@daa'}});

            //Assert
            expect(getById(view.container, `${fieldId}-helper-text`).textContent).toBe('Email Invalid');
        });

        textFieldNoErrorTest(matcher, 'asda@asds.com', fieldId);
    })
})