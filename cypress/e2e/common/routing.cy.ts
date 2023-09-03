import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Routing', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Редирект на главную страницу при переходе не авторизованного пользователя на страницу с профилем', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Переход на несуществующий url', () => {
            cy.visit('/fewfwefwefew');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login();
        });

        it('Переход авторизованного пользователя на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Переход авторизованного пользователя на страницу cтатей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });

        it('Переход пользователя c нужными ролями на страницу админ-панели', () => {
            cy.visit('/admin');
            cy.get(selectByTestId('AdminPanelPage')).should('exist');
        });

        it('Переход авторизованного пользователя на страницу создания статьи', () => {
            cy.visit('/articles/new');
            cy.get(selectByTestId('ArticleCreatePage')).should('exist');
        });
    });
});
