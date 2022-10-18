import { lazy } from 'react';

export const MainPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // ТАК НЕ ДЕЛАТЬ В РЕАЛЬНОМ КОДЕ!
            setTimeout(() => resolve(import('./MainPage')), 1500);
        })
);
