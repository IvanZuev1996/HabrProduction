import { memo, useCallback, useEffect } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClose?: () => void;
    isOpen?: boolean;
    isBeforeClose?: boolean;
    duration?: number;
}

export const OverlayContent = memo((props: OverlayProps) => {
    const { className, onClose, isOpen, duration = 150, isBeforeClose } = props;

    const { Spring } = useAnimationLibs();
    const [overlayStyles, overlayApi] = Spring.useSpring(() => ({
        opacity: 0,
        config: {
            duration
        }
    }));

    const openDrawer = useCallback(() => {
        overlayApi.start({ opacity: 1 });
    }, [overlayApi]);

    const closeDrawer = useCallback(() => {
        overlayApi.start({ opacity: 0 });
        if (onClose) {
            onClose();
        }
    }, [onClose, overlayApi]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }

        if (isBeforeClose) {
            closeDrawer();
        }
    }, [closeDrawer, isBeforeClose, isOpen, openDrawer]);

    return (
        <Spring.a.div
            className={classNames(cls.Overlay, {}, [className])}
            style={overlayStyles}
            onClick={() => closeDrawer()}
        />
    );
});

export const Overlay = (props: OverlayProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return <OverlayContent {...props} />;
};
