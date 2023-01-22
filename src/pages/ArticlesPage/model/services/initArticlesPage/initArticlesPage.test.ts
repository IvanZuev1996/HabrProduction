import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false
            }
        });

        await thunk.callThunk({} as URLSearchParams);

        expect(thunk.dispatch).toHaveBeenCalled();
    });

    test('fetchArticlesList not called with _inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true
            }
        });

        await thunk.callThunk({} as URLSearchParams);

        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
