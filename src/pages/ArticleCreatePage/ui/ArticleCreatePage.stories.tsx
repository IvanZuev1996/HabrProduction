import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleCreatePage from './ArticleCreatePage';

export default {
    title: 'pages/ArticleCreatePage',
    component: ArticleCreatePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleCreatePage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleCreatePage> = (args) => (
    <ArticleCreatePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [StoreDecorator({})];
