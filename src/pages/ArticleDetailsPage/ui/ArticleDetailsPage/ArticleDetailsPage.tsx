import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecomendationsList } from '@/features/articleRecomendationsList';
import {
    DynamicModuleLoader,
    ReducerList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getFeatureFlag } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames('', {}, [className])}>
                <VStack gap="16" max align="normal">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {isArticleRatingEnabled && (
                        <ArticleRating articleId={id!} />
                    )}
                    <ArticleRecomendationsList
                        className={cls.recommendations}
                    />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
