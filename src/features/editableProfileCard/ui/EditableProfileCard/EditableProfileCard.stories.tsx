import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybook_avatar.jpg';
import { Country } from 'entities/Country';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    firstname: 'Иван',
                    lastname: 'Зуев',
                    age: 18,
                    currency: Currency.RUB,
                    country: Country.Russia,
                    city: 'Moscow',
                    username: 'admin',
                    avatar: AvatarImg
                }
            }
        })
    ]
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
