import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ForbiddenPage from './ForbiddenPage';

export default {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ForbiddenPage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ForbiddenPage> = (args) => (
    <ForbiddenPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
