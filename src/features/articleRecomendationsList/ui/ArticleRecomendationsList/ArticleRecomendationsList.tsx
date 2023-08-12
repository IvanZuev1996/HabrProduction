import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { TextAlign, Text } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
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

        if (isLoading || error || !articles) {
            return null;
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
