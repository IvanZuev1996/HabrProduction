import { StateSchema } from '@/app/providers/StoreProvider';

import {
    getAddCommentFormError,
    getAddCommentFormText
} from './addCommentFormSelectors';

const state: DeepPartial<StateSchema> = {
    addCommentForm: {
        text: 'new comment',
        error: 'error'
    }
};

describe('addCommentFormSelectors.test', () => {
    test('should return form text', () => {
        expect(getAddCommentFormText(state as StateSchema)).toEqual(
            'new comment'
        );
    });

    test('should work return form text with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });

    test('should return form error', () => {
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });

    test('should work return form error with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });
});
