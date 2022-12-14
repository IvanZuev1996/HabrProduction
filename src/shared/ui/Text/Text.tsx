import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    NORMAL = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    CENTER = 'center',
    RIGHT = 'right',
    LEFT = 'left'
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const { t } = useTranslation();
    const {
        className,
        title,
        text,
        align = TextAlign.LEFT,
        theme = TextTheme.NORMAL,
        size = TextSize.M
    } = props;

    return (
        <div
            className={classNames('', {}, [
                className,
                cls[theme],
                cls[align],
                cls[size]
            ])}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
