import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ModalPage } from './ModalPage';

export default {
    title: 'shared/ModalPage',
    component: ModalPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ModalPage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ModalPage> = (args) => (
    <ModalPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
