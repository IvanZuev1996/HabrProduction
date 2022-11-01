import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AvatarImg from 'shared/assets/tests/storybook_avatar.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfileCard>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
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

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'error'
};

export const Readonly = Template.bind({});
Readonly.args = {
    readonly: true
};

export const Dark = Template.bind({});
Dark.args = {
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

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingDark = Template.bind({});
LoadingDark.args = {
    isLoading: true
};

LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithErrorDark = Template.bind({});
WithErrorDark.args = {
    error: 'error'
};

WithErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ReadonlyDark = Template.bind({});
ReadonlyDark.args = {
    readonly: true
};

ReadonlyDark.decorators = [ThemeDecorator(Theme.DARK)];
