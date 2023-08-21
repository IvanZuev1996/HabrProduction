import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

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

export const Dark = Template.bind({});
Dark.args = {
    value: Country.Armenia
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const ReadOnlyDark = Template.bind({});
ReadOnlyDark.args = {
    readonly: true,
    value: Country.Armenia
};

ReadOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithLabelDark = Template.bind({});
WithLabelDark.args = {
    label: 'Укажите страну',
    value: Country.Armenia
};

WithLabelDark.decorators = [ThemeDecorator(Theme.DARK)];
