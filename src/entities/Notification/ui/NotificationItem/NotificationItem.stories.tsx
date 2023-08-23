import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Notification } from '../../model/types/notification';

import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof NotificationItem>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

const item: Notification = {
    id: '1',
    description: 'Some description',
    title: 'Some title',
    userId: '1',
    href: 'some href'
};

export const NormalWithHref = Template.bind({});
NormalWithHref.args = { item };

export const NormalWithoutHref = Template.bind({});
NormalWithoutHref.args = {
    item: { ...item, href: undefined }
};
