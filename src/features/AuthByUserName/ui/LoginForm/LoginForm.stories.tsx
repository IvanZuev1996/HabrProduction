import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

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
