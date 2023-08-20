import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';
import UserIcon from '@/shared/assets/tests/storybook_avatar.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AvatarDropdown } from './AvatarDropdown';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '20px 500px 100px 500px' }}>
                <Story />
            </div>
        ),
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    avatar: UserIcon,
                    roles: [UserRole.ADMIN, UserRole.MANAGER],
                    username: 'admin'
                }
            }
        })
    ]
} as ComponentMeta<typeof AvatarDropdown>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
