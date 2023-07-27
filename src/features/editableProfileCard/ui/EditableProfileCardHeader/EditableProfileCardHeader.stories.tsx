import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
    title: 'features/editableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof EditableProfileCardHeader>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
    <EditableProfileCardHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
