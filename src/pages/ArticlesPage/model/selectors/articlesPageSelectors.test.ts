import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleView } from '@/entities/Article';

import {
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageView
} from './articlesPageSelectors';

describe('articlesPageSelectors.test', () => {
    test('should return articlesPageSelectors isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true
            }
        };

        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work return articlesPageSelectors isLoading with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return articlesPageSelectors error', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'error'
            }
        };
        expect(getArticlesPageError(state as StateSchema)).toEqual('error');
    });

    test('should work return articlesPageSelectors error with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
    });

    test('should work return articlesPageSelectors view', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleView.BIG
            }
        };
        expect(getArticlesPageView(state as StateSchema)).toEqual('BIG');
    });

    test('should work return articlesPageSelectors view with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageView(state as StateSchema)).toEqual('SMALL');
    });

    test('should work return articlesPageSelectors number of page', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                page: 2
            }
        };
        expect(getArticlesPageNum(state as StateSchema)).toEqual(2);
    });

    test('should work return articlesPageSelectors number of page with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageNum(state as StateSchema)).toEqual(1);
    });

    test('should work return articlesPageSelectors limit', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                limit: 3
            }
        };
        expect(getArticlesPageLimit(state as StateSchema)).toEqual(3);
    });

    test('should work return articlesPageSelectors limit with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageLimit(state as StateSchema)).toEqual(9);
    });

    test('should work return articlesPageSelectors hasMore', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                hasMore: true
            }
        };
        expect(getArticlesPageHasMore(state as StateSchema)).toEqual(true);
    });

    test('should work return articlesPageSelectors hasMore with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageHasMore(state as StateSchema)).toEqual(undefined);
    });

    test('should work return articlesPageSelectors inited', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                _inited: true
            }
        };
        expect(getArticlesPageInited(state as StateSchema)).toEqual(true);
    });

    test('should work return articlesPageSelectors inited with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageInited(state as StateSchema)).toEqual(false);
    });
});
