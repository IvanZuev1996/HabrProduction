import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/storybook_avatar.jpg';

import DesktopProfileCard from './DesktopProfileCard';

export default {
    title: 'entities/Profile/DesktopProfileCard',
    component: DesktopProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof DesktopProfileCard>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof DesktopProfileCard> = (args) => (
    <DesktopProfileCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    data: {
        firstname: 'Иван',
        lastname: 'Зуев',
        age: 18,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Moscow',
        username: 'admin',
        avatar: AvatarImg
    }
};
