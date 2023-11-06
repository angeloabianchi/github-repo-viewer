import React from 'react';
import { render } from '@testing-library/react';
import DisplayRepos from '../DisplayRepos/DisplayRepos';

test('renders DisplayRepos component without errors', () => {
    const setErrorMock = jest.fn();
    render(<DisplayRepos setError={setErrorMock}/>);
});


test('displays loading state when isLoading is true', () => {
    const setErrorMock = jest.fn();
    const { getByAltText } = render(<DisplayRepos isLoading={true} setError={setErrorMock} />);
    const loadingElement = getByAltText('GitHub Repo View Logo');
    expect(loadingElement).toBeInTheDocument();
});