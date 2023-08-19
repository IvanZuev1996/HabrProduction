import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '@/entities/Profile';

describe('getProfileValidateErrors.test', () => {
    test('should return profile validate errors', () => {
        const errors = [
            ValidateProfileError.NO_DATA,
            ValidateProfileError.INCORRECT_AGE
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: errors
            }
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            undefined
        );
    });
});
