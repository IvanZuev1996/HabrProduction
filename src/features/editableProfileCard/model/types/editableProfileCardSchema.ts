import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
    INCORRECT_FIRSTNAME = 'INCORRECT_FIRSTNAME',
    INCORRECT_LASTNAME = 'INCORRECT_LASTNAME',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
    INCORRECT_CITY = 'INCORRECT_CITY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
