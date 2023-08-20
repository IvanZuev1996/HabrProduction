import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/tests/storybook_avatar.jpg';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Avatar>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarImg
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarImg
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    size: 150,
    src: AvatarImg
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SmallDark = Template.bind({});
SmallDark.args = {
    size: 50,
    src: AvatarImg
};

SmallDark.decorators = [ThemeDecorator(Theme.DARK)];
