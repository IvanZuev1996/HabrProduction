import { Suspense } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Loader } from '@/shared/ui/Loader';
import { Modal, ModalPage } from '@/shared/ui/Modal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    const isMobileAgent = useDevice();

    if (isMobileAgent) {
        return (
            <ModalPage
                className={classNames('', {}, [className])}
                isOpen={isOpen}
                onClose={onClose}
                lazy
            >
                <Suspense fallback={<Loader />}>
                    <LoginFormAsync onSuccess={onClose} />
                </Suspense>
            </ModalPage>
        );
    }

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
