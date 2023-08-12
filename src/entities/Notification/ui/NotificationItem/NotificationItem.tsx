import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { HStack } from '@/shared/ui/Stack';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotificationItem, {}, [className])}>
            <HStack align="start" justify="start" gap="8">
                <div className={cls.circle} />
                <Text
                    title={item.title}
                    text={item.description}
                    size={TextSize.S}
                />
            </HStack>
            {item.href && (
                <a
                    href={item.href}
                    target="_blank"
                    className={cls.link}
                    rel="noreferrer"
                >
                    {t('Узнать подробнее')}
                </a>
            )}
        </div>
    );
});
