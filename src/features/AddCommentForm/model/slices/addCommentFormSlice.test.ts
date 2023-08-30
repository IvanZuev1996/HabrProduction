import { AddCommentFormSchema } from '../types/AddCommentForm';

import {
    addCommentFormActions,
    addCommentFormReducer
} from './addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
    test('test set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: '' };
        expect(
            addCommentFormReducer(
                state as AddCommentFormSchema,
                addCommentFormActions.setText('get some comment')
            )
        ).toEqual({ text: 'get some comment' });
    });
});
