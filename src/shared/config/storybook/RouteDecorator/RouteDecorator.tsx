import { Story } from '@storybook/api';
import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator = (story: () => Story) => (
    <BrowserRouter>{story()}</BrowserRouter>
);
