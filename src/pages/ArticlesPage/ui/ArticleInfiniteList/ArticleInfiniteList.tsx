import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleList, ArticleView } from '@/entities/Article';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Text } from '@/shared/ui/Text';

import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const isMobileAgent = useDevice();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    if (error) {
        return <Text title={t('Произошла ошибка при загрузке статей')} />;
    }

    return (
        <ArticleList
            view={isMobileAgent ? ArticleView.BIG : view}
            articles={articles}
            isLoading={isLoading}
            className={className}
        />
    );
});
