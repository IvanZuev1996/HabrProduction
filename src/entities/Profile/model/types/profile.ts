import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

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

export interface Profile {
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
