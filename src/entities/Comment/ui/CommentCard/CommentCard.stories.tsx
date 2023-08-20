import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Comment } from '../../model/types/comment';
import { CommentCard } from './CommentCard';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentCard>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

const comment: Comment = {
    id: '1',
    text: 'some comment 1',
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
    }
};

export const Normal = Template.bind({});
Normal.args = {
    comment
};

export const Dark = Template.bind({});
Dark.args = {
    comment
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
    comment,
    isLoading: true
};

export const LoadingDark = Template.bind({});
LoadingDark.args = {
    comment,
    isLoading: true
};

LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];
