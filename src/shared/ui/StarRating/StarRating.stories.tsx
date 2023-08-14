import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof StarRating>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof StarRating> = (args) => (
    <StarRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
