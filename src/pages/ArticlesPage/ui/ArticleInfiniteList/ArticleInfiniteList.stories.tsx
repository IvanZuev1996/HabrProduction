import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AvatarImg from '@/shared/assets/tests/storybook_avatar.jpg';
import ArticleImg from '@/shared/assets/storybook/ArticlePhoto.jpg';
import { ArticleType } from '@/entities/Article';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        StoreDecorator({
            articlesPage: {
                ids: ['1', '2', '3'],
                entities: {
                    '1': {
                        id: '1',
                        user: {
                            id: '1',
                            username: 'UserName',
                            avatar: AvatarImg
                        },
                        createdAt: '12.03.2021',
                        subtitle: 'subtitle',
                        title: 'TITLE',
                        type: [ArticleType.ECONOMICS, ArticleType.IT],
                        views: 233,
                        img: ArticleImg
                    },
                    '2': {
                        id: '2',
                        user: {
                            id: '1',
                            username: 'UserName',
                            avatar: AvatarImg
                        },
                        createdAt: '12.03.2021',
                        subtitle: 'subtitle',
                        title: 'TITLE',
                        type: [ArticleType.ECONOMICS, ArticleType.IT],
                        views: 233,
                        img: ArticleImg
                    },
                    '3': {
                        id: '3',
                        user: {
                            id: '1',
                            username: 'UserName',
                            avatar: AvatarImg
                        },
                        createdAt: '12.03.2021',
                        subtitle: 'subtitle',
                        title: 'TITLE',
                        type: [ArticleType.ECONOMICS, ArticleType.IT],
                        views: 233,
                        img: ArticleImg
                    }
                }
            }
        })
    ]
} as ComponentMeta<typeof ArticleInfiniteList>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => (
    <ArticleInfiniteList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
