import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleSortField } from '@/entities/Article';

import { ArticleSortSelector } from './ArticleSortSelector';

export default {
    title: 'features/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleSortSelector>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
    <ArticleSortSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    order: 'asc',
    sort: ArticleSortField.CREATED
};
