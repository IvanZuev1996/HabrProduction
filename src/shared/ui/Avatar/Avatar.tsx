import { CSSProperties, useMemo } from 'react';

import UserIcon from '@/shared/assets/icons/user-avatar.svg';
import { classNames } from '@/shared/lib/helpers/classNames';

import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, size = 100, alt } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size
        }),
        [size]
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;

    return (
        <AppImage
            src={src}
            alt={alt}
            width={size}
            height={size}
            style={styles}
            fallback={fallback}
            errorFallback={errorFallback}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
