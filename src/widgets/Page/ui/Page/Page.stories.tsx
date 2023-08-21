import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { Page } from './Page';

export default {
    title: 'widget/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Page>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [
    StoreDecorator({
        ui: {
            scroll: {}
        }
    })
];
