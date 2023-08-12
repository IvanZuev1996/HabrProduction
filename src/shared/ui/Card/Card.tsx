import { useTranslation } from 'react-i18next';
import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    CLEAR = 'clear',
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.CLEAR,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.Card, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
