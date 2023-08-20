import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { RoutePath } from '@/shared/const/router';

interface AvatarDropDownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropDownProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const dispatch = useAppDispatch();

    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            trigger={<Avatar size={40} src={authData.avatar} />}
            items={[
                {
                    content: t('Профиль'),
                    href: RoutePath.profile + authData.id
                },
                ...(isAdminPanelAvailable
                    ? [
                        {
                            content: t('Админ панель'),
                            href: RoutePath.admin_panel
                        }
                    ]
                    : []),
                {
                    content: t('Выйти'),
                    onClick: onLogout
                }
            ]}
        />
    );
});
