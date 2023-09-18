import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getSidebarState, sidebarActions } from '@/entities/Sidebar';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationPopup } from '@/features/notificationPopup';
import MenuIcon from '@/shared/assets/icons/menu-icon.svg';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { useDrawer } from '@/shared/lib/hooks/useDrawer/useDrawer';
import { AppLink } from '@/shared/ui/AppLink';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize, TextWeight } from '@/shared/ui/Text';

import { Menu } from '../Menu/Menu';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const { isOpen } = useSelector(getSidebarState);
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { isDrawerOpen, onCloseDrawer, onOpenDrawer } = useDrawer();
    const isMobileAgent = useDevice();

    const onToggleSidebar = useCallback(() => {
        dispatch(sidebarActions.toggleState(!isOpen));
    }, [dispatch, isOpen]);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        onCloseDrawer();
        setIsAuthModal(true);
    }, [onCloseDrawer]);

    if (authData) {
        if (isMobileAgent) {
            return (
                <header
                    data-testid="navbar"
                    className={classNames(cls.Navbar, {}, [className])}
                >
                    <Drawer
                        isOpen={isDrawerOpen}
                        onClose={onCloseDrawer}
                        background={false}
                        height={400}
                        lazy
                    >
                        <Menu
                            userId={authData.id}
                            onCloseDrawer={onCloseDrawer}
                        />
                    </Drawer>
                    <Button
                        data-testid="sidebar-toggle"
                        theme={ButtonTheme.CLEAR}
                        className={cls.button}
                        onClick={onOpenDrawer}
                    >
                        <MenuIcon className={cls.menuIcon} />
                    </Button>
                    <Text
                        title={t('Habr')}
                        className={cls.appName}
                        size={TextSize.S}
                        weight={TextWeight.BOLD}
                    />
                    <HStack className={cls.articleCreateBlock}>
                        <HStack
                            gap="32"
                            align="center"
                            justify="center"
                            className={cls.actions}
                        >
                            <NotificationPopup />
                            <AvatarDropdown />
                        </HStack>
                    </HStack>
                </header>
            );
        }

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
                <HStack className={cls.articleCreateBlock}>
                    <AppLink
                        to={getRouteArticleCreate()}
                        className={cls.createArticle}
                    >
                        <Button theme={ButtonTheme.CLEAR} size={ButtonSize.S}>
                            {t('Создать статью')}
                        </Button>
                    </AppLink>
                    <HStack
                        gap="32"
                        align="center"
                        justify="center"
                        className={cls.actions}
                    >
                        <NotificationPopup />
                        <AvatarDropdown />
                    </HStack>
                </HStack>
            </header>
        );
    }

    return (
        <header
            className={classNames(cls.Navbar, {}, [className])}
            data-testid="navbar"
        >
            {isMobileAgent && (
                <Drawer
                    isOpen={isDrawerOpen}
                    onClose={onCloseDrawer}
                    background={false}
                    height={250}
                    lazy
                >
                    <Menu
                        onCloseDrawer={onCloseDrawer}
                        onShowModal={onShowModal}
                    />
                </Drawer>
            )}
            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.CLEAR}
                className={cls.button}
                onClick={isMobileAgent ? onOpenDrawer : onToggleSidebar}
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
