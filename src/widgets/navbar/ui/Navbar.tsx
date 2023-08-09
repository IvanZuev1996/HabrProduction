import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions
} from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import MenuIcon from 'shared/assets/icons/menu-icon.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getSidebarState, sidebarActions } from 'entities/Sidebar';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const { isOpen } = useSelector(getSidebarState);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const dispatch = useAppDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const isAdminPanelAvailable = isAdmin || isManager;

    const onToggleSidebar = useCallback(() => {
        dispatch(sidebarActions.toggleState(!isOpen));
    }, [dispatch, isOpen]);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header
                data-testid="navbar"
                className={classNames(cls.Navbar, {}, [className])}
            >
                <Button
                    data-testid="sidebar-toggle"
                    theme={ButtonTheme.CLEAR}
                    className={cls.button}
                    onClick={onToggleSidebar}
                >
                    <MenuIcon className={cls.menuIcon} />
                </Button>
                <Text
                    title={t('Habr Clone App')}
                    className={cls.appName}
                    size={TextSize.S}
                    weight={TextWeight.BOLD}
                />
                <div className={cls.articleCreateBlock}>
                    <AppLink
                        to={RoutePath.article_create}
                        className={cls.createArticle}
                    >
                        <Button theme={ButtonTheme.CLEAR} size={ButtonSize.S}>
                            {t('Создать статью')}
                        </Button>
                    </AppLink>
                    <Dropdown
                        direction="bottom left"
                        className={cls.dropdown}
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
                </div>
            </header>
        );
    }

    return (
        <header
            className={classNames(cls.Navbar, {}, [className])}
            data-testid="navbar"
        >
            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.CLEAR}
                className={cls.button}
                onClick={onToggleSidebar}
            >
                <MenuIcon className={cls.menuIcon} />
            </Button>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
