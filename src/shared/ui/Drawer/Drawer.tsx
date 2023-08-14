import { ReactNode, memo, useCallback, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import {
    AnimationProvider,
    useAnimationLibs
} from '../../lib/components/AnimationProvider';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const height: number = window.innerHeight - 100;

export const DrawerContent = memo((props: DrawerProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
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
        [Spring.config.stiff, api, onClose]
    );

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }

        return () => {
            setIsDrawerClosed(false);
        };
    }, [api, closeDrawer, isOpen, openDrawer]);

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
                    className={cls.sheet}
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
