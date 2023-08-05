import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
    firstname: 'Иван',
    lastname: 'Зуев',
    age: 18,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://омикрон35.рф/images/doctors/2020/Portrait_Kontakt.jpg'
};

describe('updateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({
            ...data,
            firstname: '',
            lastname: ''
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_FIRSTNAME,
            ValidateProfileError.INCORRECT_LASTNAME
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect city', async () => {
        const result = validateProfileData({
            ...data,
            city: undefined
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });

    test('incorrect currency', async () => {
        const result = validateProfileData({
            ...data,
            currency: undefined
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_CURRENCY]);
    });

    test('incorrect username', async () => {
        const result = validateProfileData({
            ...data,
            username: ''
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
    });

    test('no data', async () => {
        const result = validateProfileData(undefined);

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_FIRSTNAME,
            ValidateProfileError.INCORRECT_LASTNAME,
            ValidateProfileError.INCORRECT_USERNAME,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_CURRENCY
        ]);
    });
});
