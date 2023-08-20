import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Currency } from '../../../Currency';
import { CurrencySelect } from './CurrencySelect';
import { Theme } from '@/shared/const/theme';

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
Primary.args = {
    value: Currency.RUB
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    readonly: true,
    value: Currency.RUB
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Укажите валюту',
    value: Currency.RUB
};

export const Dark = Template.bind({});
Dark.args = {
    value: Currency.RUB
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const ReadOnlyDark = Template.bind({});
ReadOnlyDark.args = {
    readonly: true,
    value: Currency.RUB
};

ReadOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithLabelDark = Template.bind({});
WithLabelDark.args = {
    label: 'Укажите страну',
    value: Currency.RUB
};

WithLabelDark.decorators = [ThemeDecorator(Theme.DARK)];
