import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { Notification } from '@/entities/Notification';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { NotificationPopup } from './NotificationPopup';

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
    title: 'features/NotificationPopup',
    component: NotificationPopup,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '20px 500px 100px 500px' }}>
                <Story />
            </div>
        ),
        StoreDecorator({}),
        withMock
    ],
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
} as ComponentMeta<typeof NotificationPopup>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof NotificationPopup> = (args) => (
    <NotificationPopup {...args} />
);

export const PCNormal = Template.bind({});
PCNormal.args = {};

export const MobileNormal = Template.bind({});
MobileNormal.args = { isMobileStorybook: true };
