/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../../Button/Button';
import { Dropdown, DropdownItem } from './Dropdown';
import { ThemeDecorator } from '../../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/popups/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 300 }}>
                <Story />
            </div>
        )
    ]
} as ComponentMeta<typeof Dropdown>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

const items: DropdownItem[] = [
    {
        content: 'content1',
        disabled: true
    },
    {
        content: 'content2',
        disabled: false
    },
    {
        content: 'content3',
        disabled: false
    }
];

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>OPEN</Button>,
    items,
    direction: 'bottom right'
};

export const Dark = Template.bind({});
Dark.args = {
    trigger: <Button>OPEN</Button>,
    items,
    direction: 'bottom right'
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
