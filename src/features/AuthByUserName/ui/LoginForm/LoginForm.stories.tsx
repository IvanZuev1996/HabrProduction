import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [
    StoreDecorator({
        loginForm: { username: 'fewfwe', password: '12312' }
    })
];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: { username: 'fewfwe', password: '12312' }
    })
];

export const WithErrorPrimary = Template.bind({});
WithErrorPrimary.args = {};

WithErrorPrimary.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'fewfwe',
            password: '12312',
            error: 'Something went wrong'
        }
    })
];

export const WithErrorDark = Template.bind({});
WithErrorDark.args = {};

WithErrorDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: 'fewfwe',
            password: '12312',
            error: 'Something went wrong'
        }
    })
];

export const Loading = Template.bind({});
Loading.args = {};

Loading.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'fewfwe',
            password: '12312',
            isLoading: true
        }
    })
];

export const LoadingDark = Template.bind({});
LoadingDark.args = {};

LoadingDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: 'fewfwe',
            password: '12312',
            isLoading: true
        }
    })
];
