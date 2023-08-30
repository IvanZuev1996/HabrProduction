import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';

interface useModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay?: number;
}

export const useModal = (props: useModalProps) => {
    const { animationDelay, isOpen, onClose } = props;

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

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close();
            }
        },
        [close]
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

    return {
        isClosing,
        isWasOpen,
        isMounted,
        close
    };
};
