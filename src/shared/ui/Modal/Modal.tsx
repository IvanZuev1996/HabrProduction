import {
    ReactNode,
    useRef,
    useState,
    useEffect,
    useCallback,
    MutableRefObject
} from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';

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

    const [isWasOpen, setIsWasOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>; // Получаем нужный тип в джейнерике

    useEffect(() => {
        if (isMounted) {
            timeRef.current = setTimeout(() => {
                setIsWasOpen(true);
            }, 5);
        }
    }, [isMounted]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler]
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

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
                <Overlay onClose={closeHandler} isOpen={!isClosing} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
