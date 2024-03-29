import { ComponentStory, ComponentMeta } from '@storybook/react';

import AvatarImg from '@/shared/assets/tests/storybook_avatar.jpg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        StoreDecorator({
            articleDetailsPage: {
                comments: {
                    ids: ['1', '2', '3'],
                    entities: {
                        '1': {
                            id: '1',
                            text: 'SOME COMMENT 1',
                            user: {
                                id: '1',
                                username: 'UserName',
                                avatar: AvatarImg
                            }
                        },
                        '2': {
                            id: '2',
                            text: 'SOME COMMENT 2',
                            user: {
                                id: '1',
                                username: 'UserName',
                                avatar: AvatarImg
                            }
                        },
                        '3': {
                            id: '3',
                            text: 'SOME COMMENT 3',
                            user: {
                                id: '1',
                                username: 'UserName',
                                avatar: AvatarImg
                            }
                        }
                    }
                }
            },
            articleDetails: {
                data: {
                    id: '1'
                }
            }
        })
    ]
} as ComponentMeta<typeof ArticleDetailsComments>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
    <ArticleDetailsComments {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    id: '1'
};
