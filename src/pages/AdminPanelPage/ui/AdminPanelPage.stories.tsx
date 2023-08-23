/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import AdminPanelPage from './AdminPanelPage';

export default {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = () => (
    <AdminPanelPage />
);

export const Light = Template.bind({});
Light.args = {};

Light.decorators = [
    StoreDecorator({
        ui: {
            scroll: {}
        }
    })
];
