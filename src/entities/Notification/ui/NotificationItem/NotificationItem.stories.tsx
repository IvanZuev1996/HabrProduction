import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
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

export const DarkWithHref = Template.bind({});
DarkWithHref.args = { item };

DarkWithHref.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalWithoutHref = Template.bind({});
NormalWithoutHref.args = {
    item: { ...item, href: undefined }
};

export const DarkWithoutHref = Template.bind({});
DarkWithoutHref.args = { item: { ...item, href: undefined } };

DarkWithoutHref.decorators = [ThemeDecorator(Theme.DARK)];
