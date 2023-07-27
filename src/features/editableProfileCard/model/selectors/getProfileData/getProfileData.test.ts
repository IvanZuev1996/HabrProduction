import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return profile data', () => {
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
        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
