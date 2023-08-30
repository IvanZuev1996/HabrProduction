import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Input>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text'
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Type text'
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const ReadonlyPrimary = Template.bind({});
ReadonlyPrimary.args = {
    placeholder: 'Type text',
    readonly: true
};

export const ReadonlyDark = Template.bind({});
ReadonlyDark.args = {
    placeholder: 'Type text',
    readonly: true
};

ReadonlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithValuePrimary = Template.bind({});
WithValuePrimary.args = {
    placeholder: 'Type text',
    value: 'value'
};

export const WithValueDark = Template.bind({});
WithValueDark.args = {
    placeholder: 'Type text',
    value: 'value'
};

WithValueDark.decorators = [ThemeDecorator(Theme.DARK)];
