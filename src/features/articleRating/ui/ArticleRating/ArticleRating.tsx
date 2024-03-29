import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getArticleDetailsData } from '@/entities/Article';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';

import { useArticleRating, useRateArticle } from '../../api/articleRatingApi';

import cls from './ArticleRating.module.scss';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const article = useSelector(getArticleDetailsData);
    const [rateArticleMutation] = useRateArticle();

    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useArticleRating({
        userId: userData?.id ?? '',
        articleId
    });
    const rating = data?.[0];

    const onAccept = useCallback(
        (startCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    articleId,
                    rate: startCount,
                    userId: userData?.id ?? '',
                    feedback
                });
            } catch (e) {
                console.log(e);
            }
        },
        [articleId, rateArticleMutation, userData?.id]
    );

    if (!article) {
        return null;
    }

    if (isLoading) {
        return <Skeleton width="100%" height={150} />;
    }

    return (
        <RatingCard
            title={t('Как вам статья?')}
            feedbackTitle={t(
                'Оставьте свой отзыв о статье, это поможет нам стать еще лучше!'
            )}
            rate={rating?.rate}
            hasFeedback
            onAccept={onAccept}
            className={classNames(cls.ArticleRating, {}, [className])}
        />
    );
});

export default ArticleRating;
