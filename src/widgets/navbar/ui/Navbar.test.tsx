import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { Navbar } from './Navbar';

describe('Navbar', () => {
    test('Test render', () => {
        componentRender(<Navbar />);
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
});
