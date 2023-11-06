import React from 'react';
import { render } from '@testing-library/react';
import DisplayRepos from '../DisplayRepos/DisplayRepos';

test('renders DisplayRepos component without errors', () => {
    const setErrorMock = jest.fn();
    render(<DisplayRepos setError={setErrorMock}/>);
});
