import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleSortField, ArticleType } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
    title: 'pages/ArticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticlesPageFilters>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => (
    <ArticlesPageFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [
    StoreDecorator({
        articlesPage: {
            order: 'asc',
            sort: ArticleSortField.VIEWS,
            search: 'react',
            type: ArticleType.IT
        }
    })
];
