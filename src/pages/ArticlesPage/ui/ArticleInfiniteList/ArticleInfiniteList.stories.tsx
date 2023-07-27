import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleInfiniteList>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => (
    <ArticleInfiniteList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
