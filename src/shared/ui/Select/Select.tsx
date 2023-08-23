import { ChangeEvent, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, Mods } from '@/shared/lib/helpers/classNames';
import { typedMemo } from '@/shared/types';

import cls from './Select.module.scss';

export interface SelectOption<T> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
    const { className, label, options, onChange, value, readonly } = props;
    const { t } = useTranslation();

    const onChangeHadler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const optionList = useMemo(
        () =>
            options?.map((opt) => (
                <option
                    className={cls.option}
                    value={opt.value}
                    key={opt.value}
                >
                    {opt.content}
                </option>
            )),
        [options]
    );

    const mods: Mods = {};

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHadler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
});
