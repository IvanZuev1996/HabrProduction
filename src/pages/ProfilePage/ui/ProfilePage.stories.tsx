/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AxiosDecorator from '@/shared/config/storybook/AxiosDecorator/AxiosDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AvatarImg from '@/shared/assets/tests/storybook_avatar.jpg';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};

Light.decorators = [
    StoreDecorator({
        profile: {
            form: {
                firstname: 'Иван',
                lastname: 'Зуев',
                age: 18,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Moscow',
                username: 'admin',
                avatar: AvatarImg
            }
        }
    }),
    AxiosDecorator()
];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                firstname: 'Иван',
                lastname: 'Зуев',
                age: 18,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Moscow',
                username: 'admin',
                avatar: AvatarImg
            }
        }
    }),
    AxiosDecorator()
];
