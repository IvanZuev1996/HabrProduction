import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { TextAlign, Text } from '@/shared/ui/Text/Text';
import { ArticleList, ArticleView } from '@/entities/Article';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useArticleRecomendationsList } from '../../api/articleRecomendationsApi';
import { ArticleListItemSkeleton } from '@/entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';

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
            <VStack gap="8" className={classNames('', {}, [className])}>
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
