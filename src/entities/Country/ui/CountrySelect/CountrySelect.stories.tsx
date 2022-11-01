import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CountrySelect } from './CountrySelect';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CountrySelect>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof CountrySelect> = (args) => (
    <CountrySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    readonly: true
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Укажите страну'
};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const ReadOnlyDark = Template.bind({});
ReadOnlyDark.args = {
    readonly: true
};

ReadOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithLabelDark = Template.bind({});
WithLabelDark.args = {
    label: 'Укажите страну'
};

WithLabelDark.decorators = [ThemeDecorator(Theme.DARK)];
