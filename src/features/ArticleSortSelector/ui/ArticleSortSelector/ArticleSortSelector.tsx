import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { SortOrder } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/Select';
import { HStack } from '@/shared/ui/Stack';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation();
    const isMobileAgent = useDevice();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию')
            },
            {
                value: 'desc',
                content: t('убыванию')
            }
        ],
        [t]
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания')
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию')
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам')
            }
        ],
        [t]
    );

    if (isMobileAgent) {
        return (
            <HStack className={classNames('', {}, [className])} gap="8" max>
                <Select
                    onChange={onChangeSort}
                    value={sort}
                    options={sortFieldOptions}
                />
            </HStack>
        );
    }

    return (
        <HStack className={classNames('', {}, [className])} gap="8">
            <Select
                onChange={onChangeSort}
                value={sort}
                options={sortFieldOptions}
                label={t('Сортировать по')}
            />
            <Select
                onChange={onChangeOrder}
                value={order}
                options={orderOptions}
                label={t('по')}
            />
        </HStack>
    );
});
