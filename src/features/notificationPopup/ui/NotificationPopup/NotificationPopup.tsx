import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { NotificationList } from '@/entities/Notification';
import NotuficationIcon from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';
import { Text, TextSize } from '@/shared/ui/Text';

import cls from './NotificationPopup.module.scss';

interface NotificationPopupProps {
    className?: string;
    isMobileStorybook?: boolean;
}

export const NotificationPopup = memo((props: NotificationPopupProps) => {
    const { className, isMobileStorybook } = props;
    const { t } = useTranslation();
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    let isMobile = useDevice();

    if (__PROJECT__ === 'storybook') {
        isMobile = isMobileStorybook || false;
    }

    const onOpenDrawer = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);

    const onDrawerClose = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotuficationIcon} width="20" />
        </Button>
    );

    if (isMobile && isMobile !== null) {
        return (
            <div>
                {trigger}
                <Drawer isOpen={isDrawerOpen} onClose={onDrawerClose}>
                    <Text
                        title={t('Уведомления')}
                        size={TextSize.S}
                        className={cls.notificationsHeader}
                    />
                    <NotificationList />
                </Drawer>
            </div>
        );
    }

    return (
        <Popover className={classNames('', {}, [className])} trigger={trigger}>
            <Text
                title={t('Уведомления')}
                size={TextSize.S}
                className={cls.notificationsHeader}
            />
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
