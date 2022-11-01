import { LoginSchema } from '../types/LoginSchema';
import { loginReducer, loginActions } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'init username'
        };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('new username')
            )
        ).toEqual({ username: 'new username' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: 'init password'
        };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('new password')
            )
        ).toEqual({ password: 'new password' });
    });
});
