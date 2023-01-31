import { lazy } from 'react';

export const ArticleCreatePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./ArticleCreatePage')), 1500);
        })
);
