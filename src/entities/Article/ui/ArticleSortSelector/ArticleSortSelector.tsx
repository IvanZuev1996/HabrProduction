import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/classNames';
import { SortOrder } from '@/shared/types';
import { ListBox } from '@/shared/ui/Popups';
import { SelectOption } from '@/shared/ui/Select';
import { HStack } from '@/shared/ui/Stack';

import { ArticleSortField } from '../../model/consts/articleConsts';

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

    const orderOptions = useMemo<SelectOption[]>(
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

    const sortFieldOptions = useMemo<SelectOption[]>(
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

    const changeSortHandler = useCallback(
        (newSort: string) => {
            onChangeSort(newSort as ArticleSortField);
        },
        [onChangeSort]
    );

    const changeOrderHandler = useCallback(
        (newOrder: string) => {
            onChangeOrder(newOrder as SortOrder);
        },
        [onChangeOrder]
    );

    return (
        <HStack className={classNames('', {}, [className])}>
            <ListBox
                onChange={changeSortHandler}
                value={sort}
                items={sortFieldOptions}
                label={t('Сортировать по')}
            />
            <ListBox
                onChange={changeOrderHandler}
                value={order}
                items={orderOptions}
                label={t('по')}
            />
        </HStack>
    );
});
