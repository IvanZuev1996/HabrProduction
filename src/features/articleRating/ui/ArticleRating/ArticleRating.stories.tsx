import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rating } from '@/entities/Rating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticleRating from './ArticleRating';

const ratings: Rating[] = [
    {
        feedback: 'feedback',
        id: '1',
        rate: 5
    },
    {
        feedback: 'feedback',
        id: '2',
        rate: 5
    },
    {
        feedback: 'feedback',
        id: '3',
        rate: 5
    }
];

export default {
    title: 'features/articleRating/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1'
                }
            },
            articleDetails: {
                data: {
                    id: '1'
                }
            }
        })
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'POST',
                status: 200,
                response: null,
                body: ratings[0]
            },
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: null
            }
        ]
    }
} as ComponentMeta<typeof ArticleRating>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

export const SelectedStarsNormal = Template.bind({});
SelectedStarsNormal.args = { articleId: '1' };

SelectedStarsNormal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: ratings
        }
    ]
};

export const NotSelectedStarsNormal = Template.bind({});
NotSelectedStarsNormal.args = { articleId: '1' };

NotSelectedStarsNormal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: []
        }
    ]
}
