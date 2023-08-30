import { UISchema } from '../types/UISchema';

import { uiActions, uiReducer } from './UISlice';

describe('UISlice.test', () => {
    test('test set scroll position', () => {
        const state: DeepPartial<UISchema> = {
            scroll: {
                '/articles': 500
            }
        };
        expect(
            uiReducer(
                state as UISchema,
                uiActions.setScrollPosition({
                    path: '/articles',
                    position: 800
                })
            )
        ).toEqual({
            scroll: {
                '/articles': 800
            }
        });
    });
});
