import { lazy } from 'react';

export const ProfilePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // ТАК НЕ ДЕЛАТЬ В РЕАЛЬНОМ КОДЕ!
            setTimeout(() => resolve(import('./ProfilePage')), 1500);
        })
);
