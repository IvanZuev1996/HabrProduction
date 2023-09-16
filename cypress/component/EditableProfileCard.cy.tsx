import { EditableProfileCard } from '@/features/editableProfileCard';

import { TestProvider } from '../../src/shared/lib/tests/componentRender/componentRender';

describe('EditableProfileCard.cy.ts', () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
        cy.login();
    });

    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });

        cy.mount(
            <TestProvider
                options={{ initialState: { user: { authData: { id: '1' } } } }}
            >
                <EditableProfileCard id="1" />
            </TestProvider>
        );
    });
});
