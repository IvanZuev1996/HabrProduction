import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rating } from '@/entities/Rating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ProfileRating from './ProfileRating';

const ratings: Rating[] = [
    {
        feedback: 'feedback',
        id: '1',
        rate: 5
    },
    {
        feedback: 'feedback',
        id: '2',
        rate: 5
    },
    {
        feedback: 'feedback',
        id: '3',
        rate: 5
    }
];

export default {
    title: 'features/profileRating/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '2'
                }
            },
            profile: {
                data: {
                    id: '2'
                },
                form: {
                    id: '2'
                }
            }
        })
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/profile-ratings?userId=2&profileId=1`,
                method: 'POST',
                status: 200,
                response: null,
                body: ratings[0]
            },
            {
                url: `${__API__}/profile-ratings?userId=2&profileId=1`,
                method: 'GET',
                status: 200,
                response: []
            }
        ]
    }
} as ComponentMeta<typeof ProfileRating>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ProfileRating> = (args) => (
    <ProfileRating {...args} />
);

export const SelectedStartNormal = Template.bind({});
SelectedStartNormal.args = { profileId: '1' };

SelectedStartNormal.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=1`,
            method: 'GET',
            status: 200,
            response: ratings
        }
    ]
};

export const NotSelectedStartNormal = Template.bind({});
NotSelectedStartNormal.args = { profileId: '1' };
