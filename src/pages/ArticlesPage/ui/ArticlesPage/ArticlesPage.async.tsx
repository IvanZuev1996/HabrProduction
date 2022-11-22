import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // ТАК НЕ ДЕЛАТЬ В РЕАЛЬНОМ КОДЕ!
            setTimeout(() => resolve(import('./ArticlesPage')), 400);
        })
);
