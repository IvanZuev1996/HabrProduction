import { StateSchema } from 'app/providers/StoreProvider';
import { getUIScroll, getUIScrollByPath } from './ui';

describe('ui.test', () => {
    test('should return scroll', () => {
        const state: DeepPartial<StateSchema> = {
            ui: {
                scroll: {
                    '/articles': 500
                }
            }
        };
        expect(getUIScroll(state as StateSchema)).toEqual({ '/articles': 500 });
    });

    test('should work scroll with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            ui: {}
        };
        expect(getUIScroll(state as StateSchema)).toEqual(undefined);
    });

    test('should return scrollByPath', () => {
        const state: DeepPartial<StateSchema> = {
            ui: {
                scroll: {
                    '/articles': 500,
                    '/main': 300
                }
            }
        };
        expect(getUIScrollByPath(state as StateSchema, '/articles')).toEqual(
            500
        );
    });

    test('should work scrollByPath with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            ui: {
                scroll: {}
            }
        };
        expect(getUIScrollByPath(state as StateSchema, '/articles')).toEqual(0);
    });
});
