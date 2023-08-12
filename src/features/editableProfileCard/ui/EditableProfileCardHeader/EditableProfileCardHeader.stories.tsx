import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AvatarImg from '@/shared/assets/tests/storybook_avatar.jpg';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
    title: 'features/EditableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
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
} as ComponentMeta<typeof EditableProfileCardHeader>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
    <EditableProfileCardHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
