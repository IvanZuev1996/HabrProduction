import {
    CSSProperties,
    ImgHTMLAttributes,
    ReactElement,
    memo,
    useLayoutEffect,
    useState
} from 'react';

import notFoundImage from '@/shared/assets/images/image-not-found.png';
import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './AppImage.module.scss';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    border?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        border,
        src = '',
        alt = 'image',
        fallback,
        errorFallback,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src;

        img.onload = () => {
            setIsLoading(false);
        };

        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    const styles: CSSProperties = {
        borderRadius: border
    };

    const defaultErrorFallback = (
        <img
            src={notFoundImage}
            alt="not_found_image"
            className={classNames(cls.notFoundImage, {}, [className])}
            style={styles}
            {...otherProps}
        />
    );

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    if (hasError && !errorFallback) {
        return defaultErrorFallback;
    }

    return (
        <img
            className={className}
            src={src}
            alt={alt}
            {...otherProps}
            style={styles}
        />
    );
});
