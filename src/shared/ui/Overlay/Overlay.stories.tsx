import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Overlay } from './Overlay';

export default {
    title: 'shared/Overlay',
    component: Overlay,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Overlay>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Overlay> = (args) => (
    <Overlay {...args} />
);

export const Normal = Template.bind({});
Normal.args = { isOpen: true };
