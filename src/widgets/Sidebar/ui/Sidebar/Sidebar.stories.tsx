/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);

export const NoAuthLigth = Template.bind({});
NoAuthLigth.args = {};

NoAuthLigth.decorators = [StoreDecorator({})];

export const NoAuthDark = Template.bind({});
NoAuthDark.args = {};

NoAuthDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthLigth = Template.bind({});
AuthLigth.args = {};

AuthLigth.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '', username: '' }
        }
    })
];

export const AuthDark = Template.bind({});
AuthDark.args = {};

AuthDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            authData: { id: '', username: '' }
        }
    })
];
