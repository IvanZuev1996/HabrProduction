import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames';
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

export enum TextWeight {
    NORMAL = 'normal_weight',
    MEDIUM = 'medium_weight',
    BOLD = 'bold_weight',
    EXTRABOLD = 'extra_bold_weight'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    weight?: TextWeight;
    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h4',
    [TextSize.M]: 'h3',
    [TextSize.L]: 'h2',
    [TextSize.XL]: 'h1'
};

export const Text = memo((props: TextProps) => {
    const { t } = useTranslation();
    const {
        className,
        title,
        text,
        align = TextAlign.LEFT,
        theme = TextTheme.NORMAL,
        size = TextSize.M,
        weight = TextWeight.NORMAL,
        'data-testid': dataTestId = 'Text'
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div
            className={classNames('', {}, [
                className,
                cls[theme],
                cls[align],
                cls[size],
                cls[weight]
            ])}
        >
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    );
});
