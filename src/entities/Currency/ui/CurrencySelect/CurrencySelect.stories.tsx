import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Currency } from '../../../Currency';

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
