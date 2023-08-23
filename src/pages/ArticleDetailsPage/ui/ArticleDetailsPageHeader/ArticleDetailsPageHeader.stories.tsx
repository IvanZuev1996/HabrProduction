import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
    <ArticleDetailsPageHeader {...args} />
);

export const CanEdit = Template.bind({});
CanEdit.args = {};

CanEdit.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1'
            }
        },
        articleDetails: {
            data: {
                user: {
                    id: '1'
                }
            }
        }
    })
];

export const NoCanEdit = Template.bind({});
NoCanEdit.args = {};

NoCanEdit.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1'
            }
        },
        articleDetails: {
            data: {
                user: {
                    id: '2'
                }
            }
        }
    })
];
