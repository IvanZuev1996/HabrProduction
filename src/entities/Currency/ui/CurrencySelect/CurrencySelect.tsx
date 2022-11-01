import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    label?: string;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD }
];

export const CurrencySelect = memo(
    ({
        className,
        value,
        onChange,
        label = '',
        readonly
    }: CurrencySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange]
        );

        return (
            <Select
                className={classNames('', {}, [className])}
                label={label}
                options={options}
                value={value}
                readonly={readonly}
                onChange={onChangeHandler}
            />
        );
    }
);
