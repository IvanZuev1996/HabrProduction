import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    skeletonsCount?: number;
}

const getSkeletons = (view: ArticleView, count: number | undefined) => {
    let skeletonsCount: number;

    if (!count) {
        skeletonsCount = view === ArticleView.SMALL ? 9 : 3;
    } else {
        skeletonsCount = count;
    }

    return new Array(skeletonsCount)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                view={view}
                key={index}
            />
        ));
};

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
        skeletonsCount
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            target={target}
            key={article.id}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.noData, {}, [className, cls[view]])}>
                <Text title={t('Статьи не найдены')} size={TextSize.M} />
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view, skeletonsCount)}
        </div>
    );
});
