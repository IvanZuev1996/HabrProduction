import { Article } from '../../../src/entities/Article';

let currentArticleData: Article;

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((articleData) => {
            currentArticleData = articleData;
            cy.visit(`articles/${articleData.id}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleData.id);
    });

    it('и статья успешно подгружается', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('ArticleDetails.Info.Title.Header').should(
            'have.text',
            currentArticleData.title
        );
        cy.getByTestId('ArticleDetails.Info.Title.Paragraph').should(
            'have.text',
            currentArticleData.subtitle
        );
        cy.getByTestId('ArticleDetails.Info.Views.Paragraph').should(
            'have.text',
            currentArticleData.views
        );
        cy.getByTestId('ArticleDetails.Info.CreatedAt.Paragraph').should(
            'have.text',
            currentArticleData.createdAt
        );
    });

    it('и комментарии к статье успешно подгружаются', () => {
        cy.getByTestId('ArticleRecomendationsList').should('exist');
    });

    it('и оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('test comment');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('и ставит оценку', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'some feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
