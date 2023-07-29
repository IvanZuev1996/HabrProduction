import 'whatwg-fetch';
import { screen } from '@testing-library/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import {
    componentRender,
    componentRenderOptions
} from 'shared/lib/tests/componentRender/componentRender';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    firstname: 'Иван',
    lastname: 'Зуев',
    age: 19,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin'
};

const options: componentRenderOptions = {
    initialState: {
        profile: {
            isLoading: false,
            error: undefined,
            data: profile,
            form: profile,
            readonly: true
        },
        user: {
            authData: {
                id: '1',
                username: 'admin'
            }
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
};

describe('features/EditableProfileCard', () => {
    test('Режим readnoly должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton')
        ).toBeInTheDocument();
        expect(
            screen.getByTestId('EditableProfileCardHeader.SaveButton')
        ).toBeInTheDocument();
    });

    test('При отмене редактирования все значения обнуляются', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );

        // Очищаем значенея в инпутах
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Age'));
        await userEvent.clear(screen.getByTestId('ProfileCard.City'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Username'));

        // Записываем новые значения в инпуты
        await userEvent.type(
            screen.getByTestId('ProfileCard.Firstname'),
            'firstname'
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.Lastname'),
            'lastname'
        );
        await userEvent.type(screen.getByTestId('ProfileCard.Age'), '20');
        await userEvent.type(screen.getByTestId('ProfileCard.City'), 'city');
        await userEvent.type(
            screen.getByTestId('ProfileCard.Username'),
            'username'
        );

        // Проверяем, что значения в инпутах обновились
        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue(
            'firstname'
        );
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue(
            'lastname'
        );
        expect(screen.getByTestId('ProfileCard.Age')).toHaveValue('20');
        expect(screen.getByTestId('ProfileCard.City')).toHaveValue('city');
        expect(screen.getByTestId('ProfileCard.Username')).toHaveValue(
            'username'
        );

        // Отменяем редактивароние
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton')
        );

        // Проверяем, что значения в инпутах обновились на изначальные
        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('Иван');
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('Зуев');
        expect(screen.getByTestId('ProfileCard.Age')).toHaveValue('19');
        expect(screen.getByTestId('ProfileCard.City')).toHaveValue('Moscow');
        expect(screen.getByTestId('ProfileCard.Username')).toHaveValue('admin');
    });

    test('При вводе некорретных значений должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );

        // Очищаем значение в инпуте
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

        // Сохраняем изменения
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton')
        );

        // Проверяем, что появилась нужная ошибка
        expect(
            screen.getByTestId('EditableProfileCard.Error.Header')
        ).toBeInTheDocument();
        expect(
            screen.getByTestId('EditableProfileCard.Error.Header')
        ).toHaveTextContent('Поле является обязательным');
    });

    test('Если все данные валидны, то на сервер должен отправиться PUT-запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );

        // Очищаем значение в инпуте
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

        // Добавляем новое валидное значение в инпут
        await userEvent.type(
            screen.getByTestId('ProfileCard.Firstname'),
            'USER'
        );

        // Сохраняем изменения
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton')
        );

        // Проверяем, что put-запрос ушел на сервер
        expect(mockPutReq).toHaveBeenCalled();
    });
});
