import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return prifile form', () => {
        const form = {
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
                form
            }
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
