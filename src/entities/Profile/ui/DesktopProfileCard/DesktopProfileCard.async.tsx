import { lazy } from 'react';

export const DesktopProfileCardAsync = lazy(
    () => import('./DesktopProfileCard')
);
