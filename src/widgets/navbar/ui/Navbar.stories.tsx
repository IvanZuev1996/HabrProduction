import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import UserIcon from '@/shared/assets/tests/storybook_avatar.jpg';
import { Notification } from '@/entities/Notification';
import { Navbar } from './Navbar';

const notifications: Notification[] = [
    {
        id: '1',
        title: 'Уведомление 1',
        description: 'Произошло какое-то событие',
        userId: '1'
    },
    {
        id: '2',
        title: 'Уведомление 2',
        description: 'Произошло какое-то событие',
        userId: '1',
        href: 'http://localhost:3000/admin'
    },
    {
        id: '3',
        title: 'Уведомление 3',
        description: 'Произошло какое-то событие',
        userId: '1',
        href: 'http://localhost:3000/admin'
    },
    {
        id: '4',
        title: 'Уведомление 4',
        description: 'Произошло какое-то событие',
        userId: '1'
    },
    {
        id: '5',
        title: 'Уведомление 5',
        description: 'Произошло какое-то событие',
        userId: '2'
    }
];

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [withMock],
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: notifications
            }
        ]
    }
} as ComponentMeta<typeof Navbar>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Ligth = Template.bind({});
Ligth.args = {};

Ligth.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};

AuthNavbar.decorators = [
    StoreDecorator({
        user: { authData: { avatar: UserIcon } }
    })
];

export const AuthNavbarDark = Template.bind({});
AuthNavbarDark.args = {};

AuthNavbarDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: { authData: { avatar: UserIcon } }
    })
];
