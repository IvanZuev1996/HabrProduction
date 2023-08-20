import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Tabs } from './Tabs';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Tabs>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'tab 1'
        },
        {
            value: 'tab 2',
            content: 'tab 2'
        },
        {
            value: 'tab 3',
            content: 'tab 3'
        }
    ],
    value: 'tab 1',
    onTabClick: action('onTabClick')
};

export const Dark = Template.bind({});
Dark.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'tab 1'
        },
        {
            value: 'tab 2',
            content: 'tab 2'
        },
        {
            value: 'tab 3',
            content: 'tab 3'
        }
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick')
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
