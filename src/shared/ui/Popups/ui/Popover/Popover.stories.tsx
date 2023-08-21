/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/const/theme';

import { ThemeDecorator } from '../../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from '../../../Button/Button';

import { Popover } from './Popover';

export default {
    title: 'shared/popups/Popover',
    component: Popover,
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
} as ComponentMeta<typeof Popover>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>OPEN</Button>,
    children: <div>Some text</div>
};

export const Dark = Template.bind({});
Dark.args = {
    trigger: <Button>OPEN</Button>,
    children: <div>Some text</div>
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
