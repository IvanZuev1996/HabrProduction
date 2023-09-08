import { ReactNode, memo, useCallback, useEffect, useState } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import {
    AnimationProvider,
    useAnimationLibs
} from '../../lib/components/AnimationProvider';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    background?: boolean;
    height?: number;
}

export const DrawerContent = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
        height = window.innerHeight - 100,
        background = true
    } = props;
    const { Gesture, Spring } = useAnimationLibs();
    const [isDrawerClosed, setIsDrawerClosed] = useState<boolean>(false);
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    const closeDrawer = useCallback(
        (velocity = 0) => {
            api.start({
                y: height,
                immediate: false,
                config: { ...Spring.config.stiff, velocity },
                onResolve: onClose
            });
            setIsDrawerClosed(true);
        },
        [Spring.config.stiff, api, height, onClose]
    );

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        } else {
            api.start({
                y: height,
                immediate: false,
                config: { ...Spring.config.stiff },
                onResolve: onClose
            });
        }

        return () => {
            setIsDrawerClosed(false);
        };
    }, [
        Spring.config.stiff,
        api,
        closeDrawer,
        height,
        isOpen,
        onClose,
        openDrawer
    ]);

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    closeDrawer();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true
        }
    );

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    if (!isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, {}, [className])}>
                <Overlay
                    onClose={() => closeDrawer()}
                    isOpen={isOpen}
                    isBeforeClose={isDrawerClosed}
                />
                <Spring.a.div
                    className={classNames(
                        cls.sheet,
                        { [cls.background]: background },
                        []
                    )}
                    style={{
                        display,
                        bottom: `calc(-100vh + ${height - 100}px)`,
                        y
                    }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => (
    <AnimationProvider>
        <DrawerAsync {...props} />
    </AnimationProvider>
);
