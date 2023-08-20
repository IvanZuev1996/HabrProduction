import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text'
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND
};

export const Square = Template.bind({});
Square.args = {
    square: true,
    children: '>',
    theme: ButtonTheme.BACKGROUND
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    size: ButtonSize.L,
    children: '>',
    theme: ButtonTheme.BACKGROUND
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    size: ButtonSize.XL,
    children: '>',
    theme: ButtonTheme.BACKGROUND
};

export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = {
    size: ButtonSize.XL,
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
    disabled: true
};

export const DisabledDark = Template.bind({});
DisabledDark.args = {
    size: ButtonSize.XL,
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
    disabled: true
};

DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];
