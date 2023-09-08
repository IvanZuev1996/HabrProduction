import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Testing article title',
    subtitle: 'Testing article subtitle',
    img: 'https://i.ytimg.com/vi/GkCBRKWKO_8/maxresdefault.jpg?7857057827',
    views: 1022,
    createdAt: '04.11.2022',
    type: ['IT'],
    userId: '1',
    blocks: []
};

export const createArticle = (article?: Partial<Article>) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: {
                Authorization: 'authorization'
            },
            body: { ...defaultArticle, ...article }
        })
        .then((response) => response.body);

export const removeArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: {
            Authorization: 'authorization'
        }
    });

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Partial<Article>): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
