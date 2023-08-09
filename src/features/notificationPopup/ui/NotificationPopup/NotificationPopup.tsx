import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import { NotificationList } from 'entities/Notification';
import NotuficationIcon from 'shared/assets/icons/notification.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './NotificationPopup.module.scss';

interface NotificationPopupProps {
    className?: string;
}

export const NotificationPopup = memo((props: NotificationPopupProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames(cls.notificationPopup, {}, [className])}
            trigger={
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotuficationIcon} width="20" />
                </Button>
            }
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
