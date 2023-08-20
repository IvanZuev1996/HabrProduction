import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from './Select';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Select>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Type text',
    options: [
        {
            content: 'Text 1',
            value: '123231'
        },
        {
            content: 'Text 2',
            value: '123231231'
        },
        {
            content: 'Text 3',
            value: '131'
        }
    ]
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Type text',
    options: [
        {
            content: 'Text 1',
            value: '123231'
        },
        {
            content: 'Text 2',
            value: '123231231'
        },
        {
            content: 'Text 3',
            value: '131'
        }
    ]
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
