import React from 'react';
import { render } from '@testing-library/react';
import { SearchForm } from './search-form';

const component = render(<SearchForm />)

describe('form component methods behaviour', () => {
    test('to match snapshot', () => {
        expect(component).toMatchSnapshot();
    })
})