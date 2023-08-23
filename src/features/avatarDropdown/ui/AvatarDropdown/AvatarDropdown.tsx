import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions
} from '@/entities/User';
import { routes } from '@/shared/const/router';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';

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
                    href: routes.profile(authData.id)
                },
                ...(isAdminPanelAvailable
                    ? [
                        {
                            content: t('Админ панель'),
                            href: routes.admin_panel()
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
