import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import cls from './Icon.module.scss';

export enum IconType {
    COPY = 'copy',
    NORMAL = 'normal'
}

export type FillType = 'primary' | 'additional';
export type IconWidth = '10' | '20' | '30' | '40' | '50' | '60';

const fillClasses: Record<FillType, string> = {
    additional: cls.additionalColor,
    primary: cls.primaryColor
};

const widthClasses: Record<IconWidth, string> = {
    10: cls.width_10,
    20: cls.width_20,
    30: cls.width_30,
    40: cls.width_40,
    50: cls.width_50,
    60: cls.width_60
};

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    type?: IconType;
    fill?: FillType;
    width?: IconWidth;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        type = IconType.NORMAL,
        width = '30',
        fill = 'primary'
    } = props;

    const classes = [
        className,
        cls[type],
        widthClasses[width],
        fillClasses[fill]
    ];

    return <Svg className={classNames(cls.Icon, {}, classes)} />;
});
