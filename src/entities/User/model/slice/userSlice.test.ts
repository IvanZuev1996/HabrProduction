import { User, UserSchema } from '../types/user';

import { userActions, userReducer } from './userSlice';

const user: User = {
    id: '1',
    username: 'admin',
    avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
};

describe('userSlice.test', () => {
    test('test setAuthData', () => {
        const state: DeepPartial<UserSchema> = {};
        expect(
            userReducer(state as UserSchema, userActions.setAuthData(user))
        ).toEqual({
            authData: user
        });
    });

    test('test logout', () => {
        const state: DeepPartial<UserSchema> = {};
        expect(userReducer(state as UserSchema, userActions.logout())).toEqual({
            authData: undefined
        });
    });
});
