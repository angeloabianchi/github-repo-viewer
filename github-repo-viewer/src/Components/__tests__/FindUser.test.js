
import { render, screen, fireEvent } from '@testing-library/react';
import FindUser from '../FindUser/FindUser.js';


test('should render component', () => {
  render(<FindUser />);
  const textElement = screen.getByTestId('FindUser');
  /* expect(textElement).toBeInTheDocument(); */
  expect(textElement).toHaveTextContent('Search Users on Github');
  /* expect(true).toBe(true); */
});

test('renders input field', () => {
  const { getByPlaceholderText } = render(<FindUser />);
  const inputElement = getByPlaceholderText('Type a github username');
  expect(inputElement).toBeInTheDocument();
});

test('renders submit button', () => {
  const { getByText } = render(<FindUser />);
  const submitButton = getByText('Submit');
  expect(submitButton).toBeInTheDocument();
});

test('updates input value on change', () => {
  const { getByPlaceholderText } = render(<FindUser />);
  const inputElement = getByPlaceholderText('Type a github username');
  fireEvent.change(inputElement, { target: { value: 'testUser' } });
  expect(inputElement.value).toBe('testUser');
});