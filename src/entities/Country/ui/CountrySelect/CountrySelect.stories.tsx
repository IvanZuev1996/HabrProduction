import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from '../../../Country';

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
Primary.args = {
    value: Country.Armenia
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    readonly: true,
    value: Country.Armenia
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Укажите страну',
    value: Country.Armenia
};
