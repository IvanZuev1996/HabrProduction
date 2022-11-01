import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CurrencySelect>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof CurrencySelect> = (args) => (
    <CurrencySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    readonly: true
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Укажите валюту'
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
