/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AxiosDecorator from 'shared/config/storybook/AxiosDecorator/AxiosDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const LightNoAuth = Template.bind({});
LightNoAuth.args = {};

LightNoAuth.decorators = [StoreDecorator({}), AxiosDecorator()];

export const DarkNoAuth = Template.bind({});
DarkNoAuth.args = {};

DarkNoAuth.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
    AxiosDecorator()
];
