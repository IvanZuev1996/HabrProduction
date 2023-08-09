import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Popover>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
