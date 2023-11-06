import { render, screen, fireEvent } from '@testing-library/react';
import { generateURL } from '../FetchData/FetchData';

test('generateURL should return the correct URL for users', () => {
    const result = generateURL('user', 'john', 1);
    expect(result).toBe('https://api.github.com/users/john');
});

test('generateURL should return the correct URL for organizations', () => {
const result = generateURL('orgs', 'danda', 1);
expect(result).toBe('https://api.github.com/users/danda/orgs');
});
