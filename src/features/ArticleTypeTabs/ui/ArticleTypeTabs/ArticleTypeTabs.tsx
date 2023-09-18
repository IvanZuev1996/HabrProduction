import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/helpers/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
    onTabClick?: () => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType, onTabClick } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('Все статьи')
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика')
            },
            {
                value: ArticleType.IT,
                content: t('IT')
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука')
            }
        ],
        [t]
    );

    const onTabClickHadler = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
            onTabClick?.();
        },
        [onChangeType, onTabClick]
    );

    return (
        <Tabs
            tabs={typeTabs}
            onTabClick={onTabClickHadler}
            value={value}
            className={classNames('', {}, [className])}
        />
    );
});
