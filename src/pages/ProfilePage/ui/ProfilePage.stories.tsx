/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Rating } from '@/entities/Rating';
import AvatarImg from '@/shared/assets/tests/storybook_avatar.jpg';
import { AxiosDecorator } from '@/shared/config/storybook/AxiosDecorator/AxiosDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ProfilePage from './ProfilePage';

const ratings: Rating[] = [
    {
        feedback: 'feedback',
        id: '1',
        rate: 5
    },
    {
        feedback: 'feedback',
        id: '2',
        rate: 5
    },
    {
        feedback: 'feedback',
        id: '3',
        rate: 5
    }
];

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/profile-ratings?userId=1&profileId=1`,
                method: 'POST',
                status: 200,
                response: null,
                body: ratings[0]
            },
            {
                url: `${__API__}/profile-ratings?userId=1&profileId=1`,
                method: 'GET',
                status: 200,
                response: []
            },
            {
                url: `${__API__}/profile-ratings?userId=1`,
                method: 'GET',
                status: 200,
                response: []
            }
        ]
    },
    decorators: [AxiosDecorator()]
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};

Light.decorators = [
    StoreDecorator({
        profile: {
            form: {
                id: '1',
                firstname: 'Иван',
                lastname: 'Зуев',
                age: 18,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Moscow',
                username: 'admin',
                avatar: AvatarImg
            },
            data: {
                id: '1'
            }
        },
        user: {
            authData: {
                id: '1'
            }
        }
    })
];
