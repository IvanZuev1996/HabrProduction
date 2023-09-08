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

    // TODO: Написать тест-кейсы на поиск, сортировку, переключение типов статей

    it('и вводит запрос в поисковую строку', () => {
        cy.getByTestId('ArticlesPageFilters.Input').type(
            currentArticleData.title
        );
        cy.getByTestId('ArticleListItem').should('have.length', 1);
    });

    it('и переключает фильтрацию статей на SCIENCE', () => {
        cy.getByTestId('Tabs.SCIENCE').click();
        cy.getByTestId('ArticleListItem.Types').should('have.length', 0);
    });
});
