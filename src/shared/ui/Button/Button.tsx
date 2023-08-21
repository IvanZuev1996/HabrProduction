import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/helpers/classNames';

import cls from './Button.module.scss';

export type BorderType = '2' | '4' | '8' | '16';
export type JustifyType = 'center' | 'start' | 'end';

const borderClasses: Record<BorderType, string> = {
    2: cls.border2,
    4: cls.border4,
    8: cls.border8,
    16: cls.border16
};

const justifyClasses: Record<JustifyType, string> = {
    center: cls.justifyCenter,
    start: cls.justifyStart,
    end: cls.justifyEnd
};

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_SECONDARY = 'backgroundSecondary',
    BACKGROUND_RED = 'backgroundRed'
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    border?: BorderType;
    max?: boolean;
    justify?: JustifyType;
    fullWidth?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.BACKGROUND,
        children,
        square,
        size = ButtonSize.M,
        justify = 'center',
        disabled,
        max,
        border,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.max]: max,
        [cls.fullWidth]: fullWidth
    };

    const classes = [
        className,
        cls[theme],
        cls[size],
        justifyClasses[justify],
        border && borderClasses[border]
    ];

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, classes)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
