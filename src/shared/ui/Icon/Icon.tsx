import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames';
import cls from './Icon.module.scss';

export enum IconType {
    COPY = 'copy',
    NORMAL = 'normal'
}

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    type?: IconType;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, type = IconType.NORMAL } = props;

    return <Svg className={classNames(cls.Icon, {}, [className, cls[type]])} />;
});
