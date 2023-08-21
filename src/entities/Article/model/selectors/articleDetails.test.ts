import { StateSchema } from '@/app/providers/StoreProvider';

import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from './articleDetails';

describe('articleDetails.test', () => {
    test('should return article data', () => {
        const data = {
            id: '1',
            title: 'some title'
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data
            }
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('should return data with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test('should return article isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return isLoading with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(
            undefined
        );
    });

    test('should return article error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error'
            }
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });

    test('should return error with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
