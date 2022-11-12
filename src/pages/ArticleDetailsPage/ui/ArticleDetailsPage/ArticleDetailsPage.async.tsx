import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // ТАК НЕ ДЕЛАТЬ В РЕАЛЬНОМ КОДЕ!
            setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
        })
);
