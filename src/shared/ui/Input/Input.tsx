import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readonly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    type?: string;
    autoFocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        readonly,
        autoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly
    };

    return (
        <input
            className={classNames(cls.Input, mods, [className])}
            type={type}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            ref={ref}
            readOnly={readonly}
            {...otherProps}
        />
    );
});
