import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ListBox } from './ListBox';

export default {
    title: 'shared/popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        )
    ]
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
        value: 'Item3',
        content: 'Item3'
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

export const TopRightDirection = Template.bind({});
TopRightDirection.args = {
    items,
    value: items[0].value,
    onChange: (value: string) => {},
    direction: 'top right'
};

export const TopRightDirectionDark = Template.bind({});
TopRightDirectionDark.args = {
    items,
    value: items[0].value,
    onChange: (value: string) => {},
    direction: 'top right'
};

TopRightDirectionDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TopLeftDirection = Template.bind({});
TopLeftDirection.args = {
    items,
    value: items[0].value,
    onChange: (value: string) => {},
    direction: 'top left'
};

export const TopLeftDirectionDark = Template.bind({});
TopLeftDirectionDark.args = {
    items,
    value: items[0].value,
    onChange: (value: string) => {},
    direction: 'top left'
};

TopLeftDirectionDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BottomLeftDirection = Template.bind({});
BottomLeftDirection.args = {
    items,
    value: items[0].value,
    onChange: (value: string) => {},
    direction: 'bottom left'
};

export const BottomLeftDirectionDark = Template.bind({});
BottomLeftDirectionDark.args = {
    items,
    value: items[0].value,
    onChange: (value: string) => {},
    direction: 'bottom left'
};

BottomLeftDirectionDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BottomRightDirection = Template.bind({});
BottomRightDirection.args = {
    items,
    value: items[0].value,
    onChange: (value: string) => {},
    direction: 'bottom right'
};

export const BottomRightDirectionDark = Template.bind({});
BottomRightDirectionDark.args = {
    items,
    value: items[0].value,
    onChange: (value: string) => {},
    direction: 'bottom right'
};

BottomRightDirectionDark.decorators = [ThemeDecorator(Theme.DARK)];
