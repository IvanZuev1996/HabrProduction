import { memo, ReactNode, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import LeftArrow from '@/shared/assets/icons/left-arrow.svg';
import {
    AnimationProvider,
    useAnimationLibs
} from '@/shared/lib/components/AnimationProvider';
import { classNames } from '@/shared/lib/helpers/classNames';

import { Button, ButtonTheme } from '../../../Button';
import { Icon } from '../../../Icon';
import { Portal } from '../../../Portal';
import { HStack, VStack } from '../../../Stack';

import cls from './ModalPage.module.scss';

interface ModalPageProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const width = window.innerWidth;

export const ModalPageContent = memo((props: ModalPageProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { t } = useTranslation();
    const { Spring } = useAnimationLibs();
    const [{ x }, api] = Spring.useSpring(() => ({ x: width }));

    const openModal = useCallback(() => {
        api.start({ x: 0 });
    }, [api]);

    const closeDrawer = useCallback(
        (velocity = 0) => {
            api.start({
                x: width,
                immediate: false,
                config: { ...Spring.config.stiff, velocity },
                onResolve: onClose
            });
        },
        [Spring.config.stiff, api, onClose]
    );

    useEffect(() => {
        if (isOpen) {
            openModal();
        }
    }, [isOpen, openModal]);

    if (!isOpen) {
        return null;
    }

    return (
        <Portal>
            <Spring.a.div
                style={{ x }}
                className={classNames(cls.ModalPage, {}, [className])}
            >
                <HStack
                    align="center"
                    justify="start"
                    gap="8"
                    onClick={() => closeDrawer()}
                >
                    <Icon Svg={LeftArrow} width={30} height={30} />
                    <Button theme={ButtonTheme.CLEAR}>{t('Вернуться')}</Button>
                </HStack>
                <VStack
                    justify="center"
                    align="center"
                    max
                    className={cls.content}
                >
                    {children}
                </VStack>
            </Spring.a.div>
        </Portal>
    );
});

export const ModalPageAsync = (props: ModalPageProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return <ModalPageContent {...props} />;
};

export const ModalPage = (props: ModalPageProps) => (
    <AnimationProvider>
        <ModalPageAsync {...props} />
    </AnimationProvider>
);
