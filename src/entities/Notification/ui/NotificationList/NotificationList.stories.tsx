import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { Notification } from '../../model/types/notification';

import { NotificationList } from './NotificationList';

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
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({}), withMock],
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
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const LoadingNormal = Template.bind({});
LoadingNormal.args = {};

LoadingNormal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: notifications,
            delay: 2000
        }
    ]
};
