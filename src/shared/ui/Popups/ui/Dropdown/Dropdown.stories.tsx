import { ComponentStory, ComponentMeta } from '@storybook/react';
import { t } from 'i18next';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Dropdown>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>{t('OPEN')}</Button>,
    items: [
        {
            content: 'content1',
            disabled: true
        },
        {
            content: 'content2',
            disabled: false
        },
        {
            content: 'content3',
            disabled: false
        }
    ]
};
