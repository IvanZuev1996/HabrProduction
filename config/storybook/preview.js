import { addDecorator } from '@storybook/react';

import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ['app', Theme.LIGHT], color: '#ffffff' },
            { name: 'dark', class: ['app', Theme.DARK], color: '#0f0f0f' }
        ]
    }
};

addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouteDecorator);
addDecorator(SuspenseDecorator);
