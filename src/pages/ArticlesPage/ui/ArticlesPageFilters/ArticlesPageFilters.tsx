import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleView, ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import FilterIcon from '@/shared/assets/icons/filter-icon.svg';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { useDrawer } from '@/shared/lib/hooks/useDrawer/useDrawer';
import { SortOrder } from '@/shared/types/sort';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';

import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isMobileAgent = useDevice();
    const { isDrawerOpen, onCloseDrawer, onOpenDrawer } = useDrawer();
    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch]
    );

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlesPageActions.setOrder(newOrder));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(newSort));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );

    const onChangeSearch = useCallback(
        (newSearch: string) => {
            dispatch(articlesPageActions.setSearch(newSearch));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData]
    );

    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlesPageActions.setType(value));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [fetchData, dispatch]
    );

    if (isMobileAgent) {
        return (
            <VStack gap="16" className={classNames('', {}, [className])} max>
                <Drawer
                    isOpen={isDrawerOpen}
                    onClose={onCloseDrawer}
                    height={400}
                    lazy
                >
                    <VStack justify="center" align="start">
                        <Text text={t('Фильтр')} />
                        <ArticleTypeTabs
                            onChangeType={onChangeType}
                            onTabClick={onCloseDrawer}
                            value={type}
                            className={cls.tabs}
                        />
                    </VStack>
                </Drawer>
                <Card className={cls.search}>
                    <Input
                        placeholder={t('Поиск...')}
                        onChange={onChangeSearch}
                        value={search}
                        data-testid="ArticlesPageFilters.Input"
                    />
                </Card>
                <HStack
                    justify="center"
                    align="center"
                    max
                    className={cls.filters}
                >
                    <ArticleSortSelector
                        className={cls.sortSelector}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                        order={order}
                        sort={sort}
                    />
                    <HStack
                        align="center"
                        justify="center"
                        gap="8"
                        max
                        className={cls.sortSelector}
                        onClick={onOpenDrawer}
                    >
                        <Button>{t('Фильтр')}</Button>
                        <Icon Svg={FilterIcon} width={30} height={30} />
                    </HStack>
                </HStack>
            </VStack>
        );
    }

    return (
        <div className={classNames('', {}, [className])}>
            <HStack justify="between">
                <ArticleSortSelector
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                    order={order}
                    sort={sort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </HStack>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Поиск...')}
                    onChange={onChangeSearch}
                    value={search}
                    data-testid="ArticlesPageFilters.Input"
                />
            </Card>
            <ArticleTypeTabs
                onChangeType={onChangeType}
                value={type}
                className={cls.tabs}
            />
        </div>
    );
});
