import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const { age, city, country, currency, firstname, lastname, username } =
        profile;
    const errors: ValidateProfileError[] = [];

    if (!firstname) {
        errors.push(ValidateProfileError.INCORRECT_FIRSTNAME);
    }

    if (!lastname) {
        errors.push(ValidateProfileError.INCORRECT_LASTNAME);
    }

    if (!username || username.length < 5) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }

    if (!age || !Number.isInteger(age) || age < 0) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    if (!currency) {
        errors.push(ValidateProfileError.INCORRECT_CURRENCY);
    }

    return errors;
};
