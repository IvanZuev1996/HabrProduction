import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/helpers/classNames';

import cls from './Flex.module.scss';

export type FlexJustify = 'center' | 'start' | 'end' | 'between';
export type FlexAlign = 'center' | 'start' | 'end' | 'normal';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    between: cls.justifyBetween,
    center: cls.justifyCenter,
    end: cls.justifyEnd
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
    normal: cls.alignNormal
};

const directionsClasses: Record<FlexDirection, string> = {
    column: cls.directionColumn,
    row: cls.directionRow
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32
};

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        align = 'center',
        direction = 'row',
        justify = 'start',
        gap,
        max,
        ...otherProps
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionsClasses[direction],
        gap && gapClasses[gap]
    ];

    const mods: Mods = {
        [cls.max]: max
    };

    return (
        <div className={classNames(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
};
