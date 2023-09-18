import { Article } from '../../../src/entities/Article';

let currentArticleData: Article;

describe('Пользователь заходит на страницу списка статей', () => {
    beforeEach(() => {
        cy.login().then((userData) => {
            cy.visit('/articles');
        });
        cy.createArticle().then((articleData) => {
            currentArticleData = articleData;
        });
        cy.getByTestId('ArticlesPageFilters.Input').clear();
    });

    afterEach(() => {
        cy.removeArticle(currentArticleData.id);
    });

    it('и статьи успешно загружаются', () => {
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it('и статьи успешно загружаются (с фикстурами)', () => {
        cy.intercept('GET', '**/articles*', {
            fixture: 'articles.json'
        });
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it('и вводит запрос в поисковую строку', () => {
        cy.getByTestId('ArticlesPageFilters.Input').type(
            currentArticleData.title
        );
        cy.getByTestId('ArticleListItem').should('have.length', 1);
    });

    it('и переключает фильтрацию статей на SCIENCE', () => {
        cy.getByTestId('ArticlesPageFilters.Input').type(
            currentArticleData.title
        );
        cy.getByTestId('Tabs.SCIENCE').click();
        cy.getByTestId('ArticleListItem').should('have.length', 0);
    });

    it('и переключает фильтрацию статей на IT', () => {
        cy.getByTestId('ArticlesPageFilters.Input').type(
            currentArticleData.title
        );
        cy.getByTestId('Tabs.IT').click();
        cy.getByTestId('ArticleListItem').should('have.length', 1);
    });

    it('и переключает фильтрацию статей на ECONOMICS', () => {
        cy.getByTestId('ArticlesPageFilters.Input').type(
            currentArticleData.title
        );
        cy.getByTestId('Tabs.ECONOMICS').click();
        cy.getByTestId('ArticleListItem').should('have.length', 0);
    });
});
