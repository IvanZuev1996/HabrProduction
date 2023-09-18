let profileId: string = '';

describe('Авторизованный пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.login().then((userData) => {
            profileId = userData.id;
            cy.visit(`profile/${userData.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('и страницы профиля успешно загружается', () => {
        cy.getByTestId('ProfileCard.Firstname').should(
            'have.value',
            'Test firstname'
        );
    });

    it('и редактирует поля firstname и lastname, и сохраняет изменения', () => {
        const newFirstname: string = 'new firstname';
        const newLastname: string = 'new lastname';

        cy.updateProfile(newFirstname, newLastname);
        cy.getByTestId('ProfileCard.Firstname').should(
            'have.value',
            newFirstname
        );
        cy.getByTestId('ProfileCard.Lastname').should(
            'have.value',
            newLastname
        );
    });
});
