describe('Routing', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.getByTestId('MainPage').should('exist');
        });

        it('Редирект на главную страницу при переходе не авторизованного пользователя на страницу с профилем', () => {
            cy.visit('/profile/1');
            cy.getByTestId('MainPage').should('exist');
        });

        it('Переход на несуществующий url', () => {
            cy.visit('/fewfwefwefew');
            cy.getByTestId('NotFoundPage').should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login();
        });

        it('Переход авторизованного пользователя на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.getByTestId('ProfilePage').should('exist');
        });

        it('Переход авторизованного пользователя на страницу cтатей', () => {
            cy.visit('/articles');
            cy.getByTestId('ArticlesPage').should('exist');
        });

        it('Переход пользователя c нужными ролями на страницу админ-панели', () => {
            cy.visit('/admin');
            cy.getByTestId('AdminPanelPage').should('exist');
        });

        it('Переход авторизованного пользователя на страницу создания статьи', () => {
            cy.visit('/articles/new');
            cy.getByTestId('ArticleCreatePage').should('exist');
        });
    });
});
