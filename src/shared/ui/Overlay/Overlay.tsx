import { memo } from 'react';
import { Mods, classNames } from 'shared/lib/helpers/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClose?: () => void;
    isOpen?: boolean;
}

export const Overlay = memo((props: OverlayProps) => {
    const { className, onClose, isOpen } = props;

    const mods: Mods = {
        [cls.opened]: isOpen
    };

    return (
        <div
            className={classNames(cls.Overlay, mods, [className])}
            onClick={onClose}
        />
    );
});
