import { Suspense, lazy } from 'react';

import { Skeleton } from '@/shared/ui/Skeleton';

import { ArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={150} />}>
        <ArticleRatingLazy {...props} />
    </Suspense>
);
