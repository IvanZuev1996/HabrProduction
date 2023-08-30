import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserRole } from '@/entities/User';
import UserIcon from '@/shared/assets/tests/storybook_avatar.jpg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { AvatarDropdown } from './AvatarDropdown';

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
