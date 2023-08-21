import { StateSchema } from '@/app/providers/StoreProvider';

import { User } from '../../types/user';

import { getUserAuthData } from './getUserAuthData';

const authData: User = {
    id: '1',
    username: 'admin',
    avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
};

describe('getUserAuthData.test', () => {
    test('should return auth data', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData
            }
        };
        expect(getUserAuthData(state as StateSchema)).toEqual(authData);
    });

    test('should work return auth data with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
    });
});
