import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
    ArticleList,
    ArticleView,
    ArticleListItemSkeleton
} from '@/entities/Article';
import { classNames } from '@/shared/lib/helpers/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { TextAlign, Text } from '@/shared/ui/Text';

import { useArticleRecomendationsList } from '../../api/articleRecomendationsApi';

interface ArticleRecomendationsListProps {
    className?: string;
}

export const ArticleRecomendationsList = memo(
    (props: ArticleRecomendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            data: articles,
            isLoading,
            error
        } = useArticleRecomendationsList(3);

        if (error || !articles) {
            return null;
        }

        if (isLoading) {
            return (
                <HStack gap="16">
                    <ArticleListItemSkeleton view={ArticleView.SMALL} />
                    <ArticleListItemSkeleton view={ArticleView.SMALL} />
                    <ArticleListItemSkeleton view={ArticleView.SMALL} />
                </HStack>
            );
        }

        return (
            <VStack
                gap="8"
                className={classNames('', {}, [className])}
                data-testid="ArticleRecomendationsList"
            >
                <Text title={t('Рекомендуем')} align={TextAlign.LEFT} />
                <ArticleList
                    articles={articles}
                    target="_blank"
                    skeletonsCount={4}
                />
            </VStack>
        );
    }
);
