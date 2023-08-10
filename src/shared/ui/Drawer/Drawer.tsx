import {
    MutableRefObject,
    ReactNode,
    memo,
    useCallback,
    useRef,
    useState
} from 'react';
import { Mods, classNames } from 'shared/lib/helpers/classNames';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 200;

export const Drawer = memo((props: DrawerProps) => {
    const { className, children, isOpen, onClose } = props;
    const [isDrawerClosing, setIsDrawerClosing] = useState<boolean>(false);
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isDrawerClosing
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsDrawerClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsDrawerClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className])}>
                <Overlay onClose={closeHandler} isOpen={!isDrawerClosing} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
});
