/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Drawer } from './Drawer';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Drawer>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Normal = Template.bind({});
Normal.args = { isOpen: true, children: <div>Some text</div> };

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: <div style={{ color: 'white' }}>Some text</div>
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
