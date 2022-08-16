import { render, screen, queryByAttribute } from '@testing-library/react';
import ProblemFivePage from './ProblemFive';

test('Should have the submit button disabled on initial load', () => {
    // Arrange
    const getById = queryByAttribute.bind(null, 'id');

    // Act
    const view = render(<ProblemFivePage />);

    //Assert
    const submitButton = getById(view.container, 'userRegSubmitButton');
});