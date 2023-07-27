import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import {
    ProfileSchema,
    ValidateProfileError
} from '../types/editableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    id: '1',
    firstname: 'Иван',
    lastname: 'Зуев',
    age: 18,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://омикрон35.рф/images/doctors/2020/Portrait_Kontakt.jpg'
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true)
            )
        ).toEqual({ readonly: true });
    });

    test('test set cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' }
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit())
        ).toEqual({
            readonly: true,
            validateError: undefined,
            form: data,
            data
        });
    });

    test('test set updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: 'some' }
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: 'some username'
                })
            )
        ).toEqual({
            form: {
                username: 'some username'
            }
        });
    });

    test('test fetch profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            error: 'error'
        };
        expect(
            profileReducer(state as ProfileSchema, fetchProfileData.pending)
        ).toEqual({
            isLoading: true,
            error: undefined
        });
    });

    test('test fetch profile service fullfield', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                fetchProfileData.fulfilled(data, '1', '')
            )
        ).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR]
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending)
        ).toEqual({
            isLoading: true,
            validateError: undefined
        });
    });

    test('test fetch profile service fullfield', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                fetchProfileData.fulfilled(data, '1', '')
            )
        ).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            validateError: undefined
        });
    });
});
