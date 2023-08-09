import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationPopup } from './NotificationPopup';

export default {
    title: 'shared/NotificationPopup',
    component: NotificationPopup,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof NotificationPopup>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof NotificationPopup> = (args) => (
    <NotificationPopup {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
