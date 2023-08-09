import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from '../../../Text/Text';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { DropdownDirection } from '../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
    className?: string;
    children: ReactNode;
    direction?: DropdownDirection;
    trigger: ReactNode;
}

export const Popover = (props: PopoverProps) => {
    const { className, trigger, direction = 'bottom left', children } = props;
    const { t } = useTranslation();
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button
                className={classNames(popupCls.trigger, {}, [cls.btn])}
            >
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                <div className={cls.panelHeader}>
                    <Text
                        title={t('Уведомления')}
                        size={TextSize.S}
                        className={cls.panelHeaderTitle}
                    />
                </div>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
