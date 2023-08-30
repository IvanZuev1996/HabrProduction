import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Comment } from '../../model/types/comment';

import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentList>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

const comments: Comment[] = [
    {
        id: '1',
        text: 'some comment 1',
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
        }
    },
    {
        id: '2',
        text: 'some comment 2',
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
        }
    },
    {
        id: '3',
        text: 'some comment 3',
        user: {
            id: '2',
            username: 'user',
            avatar: 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png'
        }
    }
];

export const Normal = Template.bind({});
Normal.args = {
    comments
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};

export const NoData = Template.bind({});
NoData.args = {
    comments: []
};
