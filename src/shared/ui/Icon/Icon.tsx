import { memo } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './Icon.module.scss';

export enum IconType {
    COPY = 'copy',
    NORMAL = 'normal'
}

export type FillType = 'primary' | 'additional';

const fillClasses: Record<FillType, string> = {
    additional: cls.additionalColor,
    primary: cls.primaryColor
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    type?: IconType;
    fill?: FillType;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        type = IconType.NORMAL,
        fill = 'primary',
        ...otherProps
    } = props;

    const classes = [className, cls[type], fillClasses[fill]];

    return (
        <Svg className={classNames(cls.Icon, {}, classes)} {...otherProps} />
    );
});
