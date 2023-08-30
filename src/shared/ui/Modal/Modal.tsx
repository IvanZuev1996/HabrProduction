import { ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/helpers/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 200;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { close, isClosing, isMounted, isWasOpen } = useModal({
        onClose,
        animationDelay: ANIMATION_DELAY,
        isOpen
    });

    const mods: Mods = {
        [cls.opened]: isOpen && isWasOpen,
        [cls.isClosing]: isClosing
    };

    if (!isMounted && lazy) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay
                    onClose={close}
                    isOpen={isOpen}
                    isBeforeClose={isClosing}
                    duration={100}
                />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
