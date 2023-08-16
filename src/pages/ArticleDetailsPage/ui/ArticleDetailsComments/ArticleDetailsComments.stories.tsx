import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AvatarImg from '@/shared/assets/tests/storybook_avatar.jpg';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

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

export const Dark = Template.bind({});
Dark.args = {
    id: '1'
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
