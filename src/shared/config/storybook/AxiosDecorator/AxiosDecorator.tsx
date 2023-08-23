import { Story } from '@storybook/react';
import MockAdapter from 'axios-mock-adapter';
import { useEffect } from 'react';

import { $api } from '../../../api/api';

interface IProps {
    children: any;
    mock: (adapter: MockAdapter) => void;
}

const apiMock = new MockAdapter($api);

const MockedComponent = ({ children, mock }: IProps) => {
    useEffect(() => {
        mock(apiMock);
        return () => {
            apiMock.reset();
        };
    });
    return children;
};

export const AxiosDecorator = () => (StoryComponent: Story) => {
    const mock = (apiMock: MockAdapter) => {
        apiMock.onGet('/profile').reply(200, {
            firstname: 'Иван',
            lastname: 'Зуев',
            age: 18,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'admin',
            avatar: 'https://омикрон35.рф/images/doctors/2020/Portrait_Kontakt.jpg'
        });
    };

    return (
        <MockedComponent mock={mock}>
            <StoryComponent />
        </MockedComponent>
    );
};
