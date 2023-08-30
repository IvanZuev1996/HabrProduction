import { StateSchema } from '@/app/providers/StoreProvider';

import { getUserInited } from './getUserInited';

describe('getUserAuthData.test', () => {
    test('should return user inited', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                _inited: false
            }
        };
        expect(getUserInited(state as StateSchema)).toEqual(false);
    });

    test('should work return user inited with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getUserInited(state as StateSchema)).toEqual(undefined);
    });
});
