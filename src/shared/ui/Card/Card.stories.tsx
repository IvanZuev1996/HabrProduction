/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from '../Text/Text';
import { Card } from './Card';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Card>;

// eslint-disable-next-line
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="Some text" />
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="Some text" />
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
