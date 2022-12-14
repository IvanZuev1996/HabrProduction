/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryText = Template.bind({});
PrimaryText.args = {
    title: 'Some Title',
    text: 'some discription'
};

export const DarkText = Template.bind({});
DarkText.args = {
    title: 'Some Title',
    text: 'some discription'
};

DarkText.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitlePrimary = Template.bind({});
OnlyTitlePrimary.args = {
    title: 'Some Title'
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Some Title'
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextPrimary = Template.bind({});
OnlyTextPrimary.args = {
    text: 'some discription'
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'some discription'
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorText = Template.bind({});
ErrorText.args = {
    title: 'Some Title Error',
    text: 'some error discription',
    theme: TextTheme.ERROR
};

export const ErrorTextDark = Template.bind({});
ErrorTextDark.args = {
    title: 'Some Title Error',
    text: 'some error discription',
    theme: TextTheme.ERROR
};

ErrorTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Some Title',
    text: 'some discription',
    size: TextSize.M
};

export const SizeMDark = Template.bind({});
SizeMDark.args = {
    title: 'Some Title',
    text: 'some discription',
    size: TextSize.M
};

SizeMDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Some Title',
    text: 'some discription',
    size: TextSize.L
};

export const SizeLDark = Template.bind({});
SizeLDark.args = {
    title: 'Some Title',
    text: 'some discription',
    size: TextSize.L
};

SizeMDark.decorators = [ThemeDecorator(Theme.DARK)];
