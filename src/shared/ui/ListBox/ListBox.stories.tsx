import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ListBox } from './ListBox';
import cls from './ListBox.module.scss';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ListBox>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

const items = [
    {
        value: 'Item1',
        content: 'Item1'
    },
    {
        value: 'Item2',
        content: 'Item2'
    },
    {
        value: 'Item2',
        content: 'Item2'
    }
];

export const Normal = Template.bind({});
Normal.args = {
    items,
    value: items[0].value,
    onChange: (value: string) => {}
};

export const Dark = Template.bind({});
Dark.args = {
    items,
    value: items[0].value,
    onChange: (value: string) => {}
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Readonly = Template.bind({});
Readonly.args = {
    items,
    value: items[0].value,
    onChange: (value: string) => {},
    readonly: true
};

export const ReadonlyDark = Template.bind({});
ReadonlyDark.args = {
    items,
    value: items[0].value,
    onChange: (value: string) => {},
    readonly: true
};

ReadonlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TopDirection = Template.bind({});
TopDirection.args = {
    items,
    value: items[0].value,
    onChange: (value: string) => {},
    direction: 'top',
    className: cls.marginForStorybook
};

export const TopDirectionDark = Template.bind({});
TopDirectionDark.args = {
    items,
    value: items[0].value,
    onChange: (value: string) => {},
    direction: 'top',
    className: cls.marginForStorybook
};

TopDirectionDark.decorators = [ThemeDecorator(Theme.DARK)];
