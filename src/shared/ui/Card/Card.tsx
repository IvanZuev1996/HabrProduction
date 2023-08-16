import { HTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames';
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
    max?: boolean;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.CLEAR,
        max,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.max]: max
    };

    return (
        <div
            className={classNames(cls.Card, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
