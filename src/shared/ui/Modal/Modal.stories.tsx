/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iste beatae officia inventore, facere sed quidem, laboresimilique repudiandae voluptate veritatis quasi dolore undererum aut ut possimus aliquid eos'
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iste beatae officia inventore, facere sed quidem, laboresimilique repudiandae voluptate veritatis quasi dolore undererum aut ut possimus aliquid eos'
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
