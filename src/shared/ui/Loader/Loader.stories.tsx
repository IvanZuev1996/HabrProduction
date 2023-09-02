// /* eslint-disable react/jsx-props-no-spreading */
// import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from '@/shared/const/theme';

// import { Loader } from './Loader';

// export default {
//     title: 'shared/Loader',
//     component: Loader,
//     argTypes: {
//         backgroundColor: { control: 'color' }
//     }
// } as ComponentMeta<typeof Loader>;

// const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

// export const Light = Template.bind({});
// Light.args = {};

// export const Dark = Template.bind({});
// Dark.args = {};

// Dark.decorators = [ThemeDecorator(Theme.DARK)];

import { Loader } from './Loader';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loader> = {
    component: Loader,
    title: 'shared/Loader'
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {};
