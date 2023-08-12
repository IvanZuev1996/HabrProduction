import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading
} from './comment';

const state: DeepPartial<StateSchema> = {
    articleDetailsPage: {
        comments: {
            isLoading: true,
            error: 'error'
        }
    }
};

describe('comment.test', () => {
    test('should return articleComments isLoading', () => {
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work return articleComments isLoading with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(
            undefined
        );
    });

    test('should return articleComments error', () => {
        expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
    });

    test('should work return articleComments error with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(
            undefined
        );
    });
});
